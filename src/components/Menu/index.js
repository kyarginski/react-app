import s from './menu.module.css'
import classNames from 'classnames'
import {useState} from "react";

function Menu() {
    let [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive)
    }
    return (
        <div className={classNames(s.menuContainer, {[s.active]: isActive})}  onClick={handleClick}>
            <div className={s.overlay}/>
            <div className={s.menuContainer}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
