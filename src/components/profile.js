import React from 'react';
import './profile.css';
// import  showModal from './modal';
import ModalExample from './modal'
import HomeButton  from './homeButton'


const Profile=(props)=>{
console.log('propsShow',props.showState)
console.log('img needed',props.pokemonClicked.profilePic)
console.log('right one',  props.pokemonClicked.moves)
console.log('model', props.modal)
console.log(props.home)
  return  <>
<div className="row">
        <div className="col align-self">
            <div className="col">
            <HomeButton function={props.click} name={props.pokemonClicked.name}/>
               
            </div>
        </div>
    </div>
    <div className="row justify-content-end">
        <div className='goRight'>
        <div className="col">
            <b> {props.pokemonClicked.id < 10 ? `#00${props.pokemonClicked.id}` :props.pokemonClicked.id > 99 ? `#${props.pokemonClicked.id}` : `0${props.pokemonClicked.id}` }-{props.pokemonClicked.name}</b>
        </div>
        </div>
    </div>
    <div className="container">
        <div className="row justify-content">
            <div className="col-4">
                <div className="row">
                     <img src={props.pokemonClicked.profilePic} alt="Bulbasaur"/>
                 </div>
                 
                 <div className="row">
                        <button type="button" className="btn btn-primary btn-lg active m-3 px-4">Grass</button>
                        <button type="button" className="btn btn-primary btn-lg active m-3 px-4">Poison</button>
                 </div>
              
            </div>
            <div className="col-8 justify-content-end ">
                <div className="row withMargin"></div>
                <div className="row withMargin">
                    <div className="col-3">
                        <img src={props.pokemonClicked.sprites.back_default}  alt="Bulbasaur"/>
                    </div>
                    <div className="col-3">
                        <img src={props.pokemonClicked.sprites.back_shiny} alt="Bulbasaur"/>
                    </div>
                    <div className="col-3">
                        <img src={props.pokemonClicked.sprites.front_default}  alt="Bulbasaur"/>
                    </div>
                    <div className="col-3">
                        <img src={props.pokemonClicked.sprites.front_shiny}  alt="Bulbasaur"/>
                    </div>
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
                        props.pokemonClicked.stats.map((e,i)=>{
                            return <td key={i}>{e[1]}</td>
                        }).reverse()
                            /*const newArr =[]
                            console.log("base",e.baseStat)
                            newArr.push(<td key={i}>{e[1]}</td>)
                            console.log('test',newArr)
                        return newArr.reverse()*/


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
                    props.pokemonClicked.moves.map((e,i )=>{
                        console.log(e[1], i)
                        return <ModalExample   name={e[0]} url={e[1]} key={i}/>
                    })
                }
        </div>
</div>
            </div>


</div>









  
        </>
        



    
}





export default Profile;








