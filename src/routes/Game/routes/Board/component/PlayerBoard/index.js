import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";
import {useState} from "react";
import cn from 'classnames';

const PlayerBoard = ({player, cards, onClickCard}) => {
    const [isSelected, setSelected] = useState(null);
    return (
        <>
            {
                cards.map((item) => (
                    <div
                        className={cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        })}
                        onClick={() => {
                            setSelected(item.id)
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            })
                        }}
                    >
                        <PokemonCard key={item.id}
                                     name={item.name}
                                     img={item.img}
                                     id={item.id}
                                     type={item.type}
                                     values={item.values}
                                     isActive
                                     minimize
                        />
                    </div>
                ))
            }
        </>
    );
}

export default PlayerBoard;