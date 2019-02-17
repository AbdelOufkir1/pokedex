import React from 'react';

const HomeButton = (props) => {
    console.log(props.home)
        return (
            <div>
            <button type="button" className='homeLink' onClick={props.test}>Home</button>
            <span>>></span>
            <span>pokename</span></div>
            
        )
    }

    export default HomeButton;
