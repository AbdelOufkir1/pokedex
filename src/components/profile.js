import React from 'react';
import './profile.css';
import ModalExample from './modal';
import HomeButton from './homeButton';
import tags from './tag'
import { UncontrolledTooltip } from 'reactstrap'





const Profile = (props) => {

    return <>
        <div className="container profileBackground">
            <div className="row">
                <div className="col align-self">
                    <div className="col">
                        <HomeButton function={props.click} name={props.pokemonClicked.name} />

                    </div>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className='goRight'>
                    <div className="col">
                        <b> {props.pokemonClicked.id < 10 ? `#00${props.pokemonClicked.id}` : props.pokemonClicked.id > 99 ? `#${props.pokemonClicked.id}` : `#0${props.pokemonClicked.id}`}-{props.pokemonClicked.name}</b>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content">
                    <div className="col-4">
                        <div className="row">
                            <img src={props.pokemonClicked.profilePic} alt="Bulbasaur" />
                        </div>

                        <div className="row">
                            {props.pokemonClicked.types.map((e, i) => {
                                console.log('tag', tags[`${e}`])
                                return <button type="button" style={{ 'backgroundColor': tags[e] }} className="btn btn-outline-dark btn-lg active m-3 px-4" key={i}>{e}</button>


                            })
                            }
                        </div>

                    </div>
                    <div className="col"></div>
                    <div className="col-7 justify-content-end">
                        <div className="row withMargin"></div>
                        <div className="row withMargin">
                            {props.pokemonClicked.sprites.map((e, i) => {


                                console.log('help', e)
                                return e.url !== 'null' ? <div className="col-3" key={i}>
                                    <div><img src={e.url} id={`UncontrolledTooltipExample${i}`} alt={e.name} /><span style={{ textDecoration: "underline", color: "blue" }} href="#" ></span></div>
                                    <UncontrolledTooltip placement="right" target={`UncontrolledTooltipExample${i}`}>
                                        {e.name}
                                    </UncontrolledTooltip>

                                </div> : null


                            })}

                        </div>
                        <div className="row withMargin"></div>
                    </div>
                </div>
            </div>
            <div className="col align-self-start">
                <div className="col-b">
                    <b> Base Stats </b>
                </div>

                <table className=" border table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">HP</th>
                            <th scope="col">Attack</th>
                            <th scope="col">Defense</th>
                            <th scope="col">Sp. Attack</th>
                            <th scope="col">Sp. Defense</th>
                            <th scope="col">Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                props.pokemonClicked.stats.map((e, i) => {
                                    return <td key={i}>{e[1]}</td>
                                }).reverse()
                            }


                        </tr>
                    </tbody>
                </table>
                <div className="col align-self-start">
                    <div className="col-b">
                        <b> Moves </b>
                    </div>
                    <div>
                        <div className='col-12'>
                            {
                                props.pokemonClicked.moves.map((e, i) => {
                                    console.log(e[1], i)
                                    return <ModalExample pokeName={props.pokemonClicked.name} name={e[0]} url={e[1]} key={i} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Profile;

