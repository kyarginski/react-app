import {useState} from "react";

import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = (bgActive) => {
    let [isOpen, setOpen] = useState(null);

    const handleClick = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <>
            <Menu isOpen={isOpen} onClickMenuButton={handleClick}/>
            <NavBar isOpen={isOpen} bgActive={bgActive} onClickMenuButton={handleClick}/>
        </>
    );
}

export default MenuHeader;
