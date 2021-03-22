import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../components/PokemonCard";
import database from "../../service/firebase";

import {useState, useEffect} from "react";

// import cardData from "../../data/cards-data.json";


const GamePage = () => {
    const [cardData, setData] = useState({});

    const history = useHistory();

    const handleClickHomeButton = () => {
        history.push('/')
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function addNewCard() {

        // копируем случайный элемент
        const index = getRandomInt(0, Object.keys(cardData).length);
        const newPokemon = Object.assign({}, Object.values(cardData)[index]);

        if (newPokemon != null) {
            let newKey = database.ref().child('pokemons').push().key;
            newPokemon.keyId = newKey;
            newPokemon.id = getRandomInt(100, 1000);  // рандом от 100 до 1000
            newPokemon.active = false;
            newPokemon.name = 'newName' + newPokemon.id.toString()

            database.ref('pokemons/' + newKey).set(newPokemon, (error) => {
                if (error) {
                    // The write failed...
                    console.error('error adding new card', error)
                } else {
                    // Data saved successfully!
                    setData(prevState=>({...prevState, [newKey]:newPokemon}))
                }
            });
        }
    }

    const handleClickNewCardButton = () => {
        addNewCard();
    }

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setData(snapshot.val());
        });

    }, [])

    const handleChangeVisible = (id, keyId, visible) => {
        setData(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = visible;
                    pokemon.keyId = keyId

                    database.ref('pokemons/' + pokemon.keyId).set(pokemon, (error) => {
                        if (error) {
                            // The write failed...
                            console.error('error save data', error)
                        } else {
                            // Data saved successfully!
                        }
                    });
                }

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    return (
        <div className={s.root}>
            <div className={s.container}>

                <div className={s.flex}>
                    <button className={s.button} onClick={handleClickNewCardButton}>
                        Add New Card
                    </button>
                </div>

                <div className={s.flex}>
                    {
                        Object.entries(cardData).map(([key, {name, img, id, type, values, active}]) => (
                            <PokemonCard key={key} keyId={key} name={name} img={img} id={id}
                                         type={type} values={values}
                                         isActive={active} onClick={handleChangeVisible}
                            />
                        ))

                    }
                </div>

                <br/>
                <div className={s.flex}>
                    <button className={s.button} onClick={handleClickHomeButton}>
                        Return to Home
                    </button>
                </div>

            </div>
        </div>
    );
}

export default GamePage;
