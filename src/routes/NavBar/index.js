import s from './navbar.module.css'
import classNames from 'classnames'

const NavBar = ({isOpen, onClickMenuButton}) => {

    return (
        <nav id={s.root} className={s.root} >
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={classNames(s.menuButton, {[s.active]: isOpen})} onClick={onClickMenuButton}>
                    <span/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
