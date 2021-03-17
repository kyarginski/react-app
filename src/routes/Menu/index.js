import s from './menu.module.css'
import classNames from 'classnames'

function Menu({isOpen, onClickMenuButton}) {

    const clazz = classNames(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false
    })

    const menuItems = [
        {
            title: 'HOME',
            to: '#welcome',
        },
        {
            title: 'GAME',
            to: '#game',
        },
        {
            title: 'ABOUT',
            to: '#about',
        },
        {
            title: 'CONTACT',
            to: '#contact',
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
                                <a href={to}>
                                    {title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;
