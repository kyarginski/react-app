import '../../App.css';
import s from './header.module.css'

function Header({title = "no Title", descr = "without Description", onClickButton}) {
    const handleClick = () => {
        onClickButton && onClickButton('game')
    }
    return (
        <header className={s.root}>
            <div className={s.forest}/>
            <div className={s.container}>
                {
                    {title} && <h1>{title}</h1>
                }
                {
                    {descr} && <p>{descr}</p>
                }
                <button className={s.button} onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    );
}

export default Header;
