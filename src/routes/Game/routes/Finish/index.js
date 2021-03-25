import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../../../components/PokemonCard";
import {PokemonContext} from "../../../../context/pokemonContext";
import {useContext, useEffect, useState} from "react";

const FinishPage = () => {
    const history = useHistory();

    const { pokemons, pokemons2 } = useContext(PokemonContext)
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue',
        }))
    });
    const [player2, setPlayer2] = useState(() => {
        return Object.values(pokemons2).map(item => ({
            ...item,
            possession: 'red',
        }))
    });
    const handleClickHomeButton = () => {
        history.push('/')
    }

    useEffect(() => {
        setPlayer1(pokemons);
        setPlayer2(pokemons2);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={s.root}>
            <div className={s.container}>

                <div className={s.flex}>
                    {
                        Object.entries(player1).map(([key, {
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
                    <button onClick={handleClickHomeButton}>
                        End game
                    </button>
                </div>
                <br/>

                <div className={s.flex}>
                    {
                        Object.entries(player2).map(([key, {
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


            </div>
        </div>
    );
}

export default FinishPage;
