import React from 'react';

const Button = (props) => {

    return (
        <>  
            <br />
            <button type="button" className="btn btn-danger btn-primary btn-lg btn-block" onClick={props.loadMorePoke}>Load More</button>
            <br /> <br />
        </>
    )
}

const HomeButton = (props) => {
console.log(props.home)
    return (
        <div>
        <button type="button" className='homeLink' onClick={props.homeNow}>Home</button>
        <section>>></section>
        <a >pokename</a></div>
        
    )
}

export { Button, HomeButton };