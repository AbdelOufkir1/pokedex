import React from 'react';
import './header.css'

const Header = (props) => {
    return <>
            <div className="headerBackground">
                <div className="row darkBorder">
                    <div className="col-4">
                        <div className="pokeball pokeball_right">
                            <div className="pokeball__button"></div>
                        </div>
                    </div>
                    <div className="col-4 center-block">
                        <h1>Pursuit Pokedex</h1>
                        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={props.onChange} />
                    </div>
                    <div className="col-4">
                        <div className="pokeball pokeball_left">
                            <div className="pokeball__button"></div>
                        </div>
                    </div>
                </div>
            </div>
    </>
}


export default Header;
