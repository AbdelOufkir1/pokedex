import React from 'react';
import './dropdown.css';



const Dropdown = (props) => {
    console.log("hel",props.click);

    return <p onClick={props.click}>{props.name}</p>

}


export default Dropdown;
