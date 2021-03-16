import s from './style.module.css'

const GamePage = ({onChangePage}) => {
    const handleClickButton = () => {
        onChangePage && onChangePage('app')
    }
    return (
        <div className={s.root}>
            <div className={s.forest}/>
            <div className={s.container}>
                <p>This is the Game Page.</p>
                <button className={s.button} onClick={handleClickButton}>
                    Return to Home
                </button>
            </div>
        </div>
    );
}

export default GamePage;
