import React from 'react';

const HomeButton = (props) => {
    console.log(props.home)
        return (
            <div>
                <span type="button" className='homeLink' onClick={props.function}>Home</span>
                <span>>></span>
                <span>{props.name}</span>
            </div>

        )
    }

    export default HomeButton;