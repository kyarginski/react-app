import s from './navbar.module.css'
import classNames from 'classnames'
import {useState} from "react";

function NavBar() {
    let [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive)
    }
    return (
        <nav className={s.root} onClick={handleClick}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={classNames(s.menuButton, {[s.active]: isActive})}>
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
