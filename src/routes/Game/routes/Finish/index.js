import {useHistory} from 'react-router-dom';
import s from './style.module.css'

const FinishPage = () => {
    const history = useHistory();

    const handleClickButton = () => {
        history.push('/')
    }
    return (
        <div className={s.root}>
            <div className={s.container}>
                <p>Это страница завершения.</p>
                <br/>
                <button className={s.button} onClick={handleClickButton}>
                    Return to Home
                </button>
            </div>
        </div>
    );
}

export default FinishPage;
