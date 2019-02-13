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

export default Button;