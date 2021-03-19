import CardBackSide from '../assets/card-back-side.jpg'
import s from './pockemoncard.module.css'
import classNames from 'classnames'

const PokemonCard = ({name, img, keyId, id, type, values, isActive, onClick}) => {

    const handleClick = () => {
        isActive = !isActive

        console.log("PokemonCard id = ", id, " keyId = ", keyId, " isActive = ", isActive)

        onClick && onClick(id, keyId, isActive)
    }
    return (
        <div className={s.root} onClick={handleClick}>
            <div className={classNames(s.pokemonCard, {[s.active]: isActive})}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${s[type]}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{values.top}</div>
                                <div className={`${s.count} ${s.right}`}>{values.right}</div>
                                <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                                <div className={`${s.count} ${s.left}`}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={CardBackSide} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;
