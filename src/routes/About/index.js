import {useHistory} from 'react-router-dom';
import s from './style.module.css'

const AboutPage = () => {
    const history = useHistory();

    const handleClickButton = () => {
        history.push('/')
    }
    return (
        <div className={s.root}>
            <div className={s.forest}/>
            <div className={s.container}>
                <p>This is the About Page.</p>
                <br/>
                <button className={s.button} onClick={handleClickButton}>
                    Return to Home
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
