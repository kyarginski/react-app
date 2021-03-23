import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../../../components/PokemonCard";

import {useState, useEffect, useContext} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const selectedCards = useContext(PokemonContext)
    const [cardData, setPokemons] = useState({});

    const history = useHistory();

    const handleClickHomeButton = () => {
        history.push('/')
    }

    function getExistIndex(arr, value) {
        let index = -1
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].keyId === value.keyId) {
                index = i;
            }
        }
        return index;
    }

    function removeItemFromSelected(arr, value) {
        let index = getExistIndex(arr, value)
        if (index > -1) {
            arr.splice(index, 1);
        }
        console.log('index', index)
        console.log('arr', arr)
        return arr;
    }

    function setSelectedPokemon(data) {
        console.log('data.selected', data.selected)

        if (data.selected === true) {
            console.log('selected true')

            let index = getExistIndex(selectedCards.pokemons, data)
            if (index === -1) {
                selectedCards.pokemons.push(data)
            }
        } else {
            console.log('selected false')
            selectedCards.pokemons = removeItemFromSelected(selectedCards.pokemons, data)
        }
        console.log('selectedCards.pokemons', selectedCards.pokemons)
    }

    const handleClickNewGameButton = () => {
        history.push('/game/board');
    }

    useEffect(() => {
        firebase.getPokemonsSoket((cardData) => {
            setPokemons(cardData);
        });
        return () => firebase.closePokemonsSoket();
    }, [])

    const handleSelectCard = (id, keyId, visible, selected) => {
        // не больше 5 покемонов или отмена выбора карты
        if (selectedCards.pokemons.length < 5 || !selected) {

            setPokemons(prevState => {
                return Object.entries(prevState).reduce((acc, item) => {
                    let pokemon = {...item[1]};
                    if (pokemon.id === id) {
                        pokemon.active = visible;
                        pokemon.keyId = keyId

                        // TODO отключим запись в БД
                        // firebase.postPokemon(item[0], pokemon);

                        console.log('selected получили', selected)

                        pokemon.selected = selected

                        setSelectedPokemon(pokemon)

                    }

                    acc[item[0]] = pokemon;

                    return acc;
                }, {});
            });
        }
    }

    return (
        <div className={s.root}>
            <div className={s.container}>

                <div className={s.button}>
                    <button onClick={handleClickNewGameButton}>
                        Begin New Game
                    </button>
                </div>

                <div className={s.flex}>
                    {
                        Object.entries(cardData).map(([key, {
                            name,
                            img,
                            id,
                            type,
                            values,
                            selected,
                            active = true
                        }]) => (
                            <PokemonCard key={key} keyId={key} name={name} img={img} id={id}
                                         type={type} values={values}
                                         isActive={true} isSelected={selected} onClick={handleSelectCard}
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
