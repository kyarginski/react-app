import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../components/PokemonCard";

import {useState} from "react";

import cardData from "../../data/cards-data.json";


const GamePage = () => {
    const [cardData2, setData] = useState(cardData);

    const history = useHistory();

    const handleClickButton = () => {
        history.push('/')
    }

    const handleChangeVisible = (id, visible) => {
        setData(prevState => prevState.filter(item => {
            if (item.id === id){
                item.active = visible;
            }
            return true;
        }))
        console.log("cardData2 = ", cardData2)
    }

    return (
        <div className={s.root}>
            <div className={s.forest}/>
            <div className={s.container}>
                <div className={s.flex}>
                    {
                        cardData.map(item => <PokemonCard key={item.id} name={item.name} img={item.img} id={item.id}
                                                          type={item.type} values={item.values}
                                                          isActive={item.active} onClick={handleChangeVisible}/>)
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
