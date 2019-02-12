import React from 'react';
import './header.css'

const Header = () => {
    return <>
        <div className="red"></div>
        <div className="container-fluid pokeHeader">
            <div className="row darkBorder">
                <div className="col-4">
                    <img src="https://ih1.redbubble.net/image.250345047.6931/pp,550x550.u1.jpg" alt="Poke Ball" className="poke float-left" />
                </div>
                <div className="col-4 center-block">
                    <h1>Pursuit Pokedex</h1>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="col-4">
                    <img src="https://ih1.redbubble.net/image.250345047.6931/pp,550x550.u1.jpg" alt="Poke Ball" className="poke float-right" />
                </div>
            </div>  
        </div>
    </>
}


export default Header;
