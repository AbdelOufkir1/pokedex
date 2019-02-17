import React from 'react';

const HomeButton = (props) => {
    console.log(props.home)
        return (
            <div>
            <button type="button" className='homeLink' onClick={props.function}>Home</button>
            <span>>></span>
            <span>{props.name}</span></div>
            
        )
    }

    export default HomeButton;
