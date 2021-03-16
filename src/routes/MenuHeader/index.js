import Menu from '../Menu';
import NavBar from '../NavBar';
import {useState} from "react";


const MenuHeader = () => {
    let [isActive, setActive] = useState(false);
    const handleClick = () => {
        if (isActive === undefined) {
            setActive(true)
        } else {
            setActive(prev => !prev)
        }
    }

    return (
        <>
            <Menu isActive={isActive} onClickMenuButton={handleClick}/>
            <NavBar isActive={isActive} onClickMenuButton={handleClick}/>
        </>
    );
}

export default MenuHeader;
