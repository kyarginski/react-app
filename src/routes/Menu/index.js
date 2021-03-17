import s from './menu.module.css'
import classNames from 'classnames'

function Menu({isActive, onClickMenuButton}) {

    const handleClick = () => {
        onClickMenuButton && onClickMenuButton()
    }
    const clazz = classNames(s.menuContainer, {[s.active]: isActive, [s.deactive]: !isActive})
    return (
        <div className={clazz}  onClick={handleClick}>
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
