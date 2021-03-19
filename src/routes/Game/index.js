import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../components/PokemonCard";
import database from "../../service/firebase";

import {useState, useEffect} from "react";

// import cardData from "../../data/cards-data.json";


const GamePage = () => {
    const [cardData, setData] = useState({});

    const history = useHistory();

    const handleClickButton = () => {
        history.push('/')
    }

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setData(snapshot.val());
        });

    }, [])

    const handleChangeVisible = (id, visible) => {
        console.log("handleChangeVisible id = ", id, " visible = ", visible)

        setData(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = visible;
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
                    {

                        Object.entries(cardData).map(([key, {name, img, id, type, values, active}]) => (
                            <PokemonCard key={id} name={name} img={img} id={id}
                                         type={type} values={values}
                                         isActive={active} onClick={handleChangeVisible}
                            />
                        ))

                    }
                </div>

                <div className={s.flex}>
                    <button className={s.button} onClick={handleClickButton}>
                        Return to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GamePage;
