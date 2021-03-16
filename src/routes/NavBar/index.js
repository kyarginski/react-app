import s from './navbar.module.css'
import classNames from 'classnames'

function NavBar({isActive, onClickMenuButton}) {

    if (isActive === undefined) {
        isActive = true
    }

    const handleClick = () => {
        isActive = !isActive
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
