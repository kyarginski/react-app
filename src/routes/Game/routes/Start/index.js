import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../../../components/PokemonCard";

import {useState, useEffect, useContext} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const pokemonsContext = useContext(PokemonContext)
    const [cardData, setPokemons] = useState({});

    const history = useHistory();

    const handleClickHomeButton = () => {
        history.push('/')
    }

    const handleClickNewGameButton = () => {
        history.push('/game/board');
    }

    useEffect(() => {
        firebase.getPokemonsSoket((cardData) => {
            setPokemons(cardData);
        });
        return () => firebase.closePokemonsSoket();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleActiveSelected = (key) => {
        const pokemon = {...cardData[key]}
        pokemonsContext.onSelectPokemons(key, pokemon);
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }

        }))

    }

    return (
        <div className={s.root}>
            <div className={s.container}>

                <div className={s.button}>
                    <button
                        onClick={handleClickNewGameButton}
                        disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                    >
                        Begin New Game
                    </button>
                </div>
                <br/>
                <div>
                    <p>Select 5 cards</p>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(cardData).map(([key, {
                            name,
                            img,
                            id,
                            type,
                            values,
                            selected
                        }]) => (
                            <PokemonCard key={key} keyId={key} name={name} img={img} id={id}
                                         type={type} values={values}
                                         className={s.card}
                                         isActive={true} isSelected={selected}
                                         onClick={() => {
                                             if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                                 handleActiveSelected(key)
                                             }
                                         }}
                            />
                        ))

                    }
                </div>

                <br/>
                <div className={s.button}>
                    <button onClick={handleClickHomeButton}>
                        Return to Home
                    </button>
                </div>

            </div>
        </div>
    );
}

export default StartPage;
