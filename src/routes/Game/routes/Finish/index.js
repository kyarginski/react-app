import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../../../components/PokemonCard";
import {PokemonContext} from "../../../../context/pokemonContext";
import {useContext, useEffect, useState} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";


const FinishPage = () => {
    const history = useHistory();
    const firebase = useContext(FireBaseContext)

    const pokemonsContext = useContext(PokemonContext)
    const [pokemonPrize, setPokemonsPrize] = useState({});

    const savePrizePokemon = (pokemon) => {
        delete pokemon.selected;

        firebase.addPokemon(pokemon, () => {
            console.log("after saving to Firebase", pokemon);
        })

    }

    const handleClickEndGameButton = () => {

        // for (const [key, value] of Object.entries(pokemonPrize)) {
        //     if (value.selected === true){
        //         savePrizePokemon(value);
        //         break;
        //     }
        // }

        Object.values(pokemonPrize).forEach(value => {
            if (value.selected === true){
                savePrizePokemon(value);
            }
        });

        history.push('/')

    }

    if (Object.keys(pokemonsContext.pokemons).length === 0) {
        history.replace('/home');
    }

    useEffect(() => {
        setPokemonsPrize(pokemonsContext.pokemons2);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleActiveSelected = (key) => {
        const pokemon = {...pokemonsContext.pokemons2[key]}
        pokemonsContext.onSelectPokemonsPlayer2(key, pokemon);
        setPokemonsPrize(prevState => ({
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

                <div className={s.flex}>
                    {
                        Object.entries(pokemonsContext.pokemons).map(([key, {
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
                            />
                        ))

                    }
                </div>

                <br/>
                <div className={s.button}>
                    <button onClick={handleClickEndGameButton}>
                        End game
                    </button>
                </div>
                <br/>
                <div>
                    <p>Choose 1 card for Your collection</p>
                </div>

                <div className={s.flex}>
                    {
                        Object.entries(pokemonPrize).map(([key, {
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
                                             handleActiveSelected(key)
                                         }}
                            />
                        ))

                    }
                </div>


            </div>
        </div>
    );
}

export default FinishPage;
