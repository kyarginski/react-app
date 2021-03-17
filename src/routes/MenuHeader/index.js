import Menu from '../Menu';
import NavBar from '../NavBar';
import {useState} from "react";


const MenuHeader = () => {
    let [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(prev => !prev)
    }

    return (
        <>
            <Menu isActive={isActive} onClickMenuButton={handleClick}/>
            <NavBar isActive={isActive} onClickMenuButton={handleClick}/>
        </>
    );
}

export default MenuHeader;
