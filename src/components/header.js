import React from 'react';
import './header.css'
// import { Row } from 'reactstrap';
import HomeButton from './homeButton'
const Header = () => {
    return <>

        <div className="red"></div>
        <div className="container-fluid pokeHeader">

            <div className="row darkBorder">

                <div className=" colMax">
                    <img src="https://ih1.redbubble.net/image.250345047.6931/pp,550x550.u1.jpg" alt="Poke Ball" className="poke float-left" />
                </div>
                <div className="colMax center-block">
                    <h1>Pursuit Pokedex</h1>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="colMax">
                    <img src="https://ih1.redbubble.net/image.250345047.6931/pp,550x550.u1.jpg" alt="Poke Ball" className="poke float-right" />
                </div>
            </div>  

        </div>

    </>
}


export default Header;
