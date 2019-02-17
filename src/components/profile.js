import React from 'react';
import './profile.css';
import Modal from './modal';


const Profile=(props)=>{
console.log('propsShow',props.showState)
console.log('img needed',props.pokemonClicked.profilePic)
console.log('right one', typeof props.pokemonClicked.moves)

  return  <>
           
            <div >
                {
                    props.pokemonClicked.moves.map((e,i )=>{
                        return <button className="scrolling-wrapper">{e[0]}</button>
                    })
                }
            </div>
           
        </>
    //  return <button onClick={()=><Modal />}>{props.pokemonClicked.name} </button>



    
}





export default Profile








