import {useHistory} from 'react-router-dom';
import s from './style.module.css'
import PokemonCard from "../../../../components/PokemonCard";
import {PokemonContext} from "../../../../context/pokemonContext";
import {useContext} from "react";

const FinishPage = () => {
    const history = useHistory();

    const pokemonsContext = useContext(PokemonContext)

    const handleClickHomeButton = () => {
        history.push('/')
    }

    if (Object.keys(pokemonsContext.pokemons).length === 0){
        history.replace('/home');
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
                    <button onClick={handleClickHomeButton}>
                        End game
                    </button>
                </div>
                <br/>

                <div className={s.flex}>
                    {
                        Object.entries(pokemonsContext.pokemons2).map(([key, {
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
