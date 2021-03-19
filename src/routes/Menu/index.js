import s from './menu.module.css'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

function Menu({isOpen, onClickMenuButton}) {

    const clazz = classNames(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false
    })

    const menuItems = [
        {
            title: 'HOME',
            to: 'home',
        },
        {
            title: 'GAME',
            to: 'game',
        },
        {
            title: 'ABOUT',
            to: 'about',
        },
        {
            title: 'CONTACT',
            to: 'contact',
        },
    ]

    return (
        <div className={clazz} onClick={onClickMenuButton}>
            <div className={s.overlay}/>
            <div className={s.menuContainer}>
                <ul>
                    {
                        menuItems.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;
