import {useHistory} from 'react-router-dom';
import '../../App.css';
import s from './header.module.css'

function Header({title = "no Title", descr = "without Description"}) {
    const history = useHistory();

    const handleClick = () => {
        history.push('game')
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
