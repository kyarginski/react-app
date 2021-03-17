import s from './navbar.module.css'
import classNames from 'classnames'

function NavBar({isActive, onClickMenuButton}) {

    const handleClick = () => {
        onClickMenuButton && onClickMenuButton()
    }

    return (
        <nav className={s.root} onClick={handleClick}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <p className={classNames(s.menuButton, {[s.active]: isActive})}>
                    <span/>
                </p>
            </div>
        </nav>
    );
}

export default NavBar;
