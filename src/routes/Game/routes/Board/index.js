import s from './style.module.css';
import {useContext} from "react";
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";

const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext)

    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                            {
                                Object.values(pokemons).map(item =>
                                    <PokemonCard key={item.keyId}
                                                 name={item.name}
                                                 img={item.img}
                                                 id={item.id}
                                                 type={item.type}
                                                 values={item.values}
                                                 isActive={true}
                                                 isSelected={item.selected}
                                                 minimize={true}
                                                 className={s.card}
                                    />                                                      )
                            }
						</div>

            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;