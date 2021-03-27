import {useState, useEffect, useCallback} from 'react';
import s from './style.module.css';
import YouWin from './assets/you-win.png';
import YouLose from './assets/you-lose.png';
import Draw from './assets/draw.png';
import {useHistory} from "react-router-dom";

const Result = ({type}) => {
    const [url, setUrl] = useState(null);
    const history = useHistory();

    const gotoFinish = () => {
        if (type === 'win') {
            history.push('/game/finish');
        } else {
            history.push('/home');
        }
    }

    const keyFunction = useCallback(() => {
        gotoFinish();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false);

        return () => {
            document.removeEventListener("keydown", keyFunction, false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        switch (type) {
            case 'win':
                setUrl(YouWin);
                break;
            case 'lose':
                setUrl(YouLose);
                break;
            case 'draw':
                setUrl(Draw);
                break;
            default:
                setUrl(YouWin);
        }
    }, [type]);

    const handleClick = () => {
        gotoFinish();
    }

    return (
        <div className={s.result}
             onClick={handleClick}
             onKeyPress={handleClick}
        >
            <img src={url} alt="result"/>
        </div>
    );
};

export default Result;
