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

    const handleClickNewCardButton = () => {
        //history.push('/')
    }


    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setData(snapshot.val());

            console.log("cardData from useEffect ", snapshot.val())
        });

    }, [])

    const handleChangeVisible = (id, keyId, visible) => {
        console.log("handleChangeVisible id = ", id, " visible = ", visible)

        setData(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = visible;
                    pokemon.keyId = keyId

                    database.ref('pokemons/'+ pokemon.keyId).set(pokemon);
                }

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });

        console.log("cardData = ", cardData)
    }

    return (
        <div className={s.root}>
            <div className={s.forest}/>
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
