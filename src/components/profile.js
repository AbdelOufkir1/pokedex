import React from 'react';
import './profile.css';
// import  showModal from './modal';
import ModalExample from './modal'


const Profile=(props)=>{
console.log('propsShow',props.showState)
console.log('img needed',props.pokemonClicked.profilePic)
console.log('right one',  props.pokemonClicked.moves)
console.log('model', props.modal)
  return   <div>
                {
                    props.pokemonClicked.moves.map((e,i )=>{
                        return <ModalExample name={e[0]} url={e[1]} key={i}/>
                    })
                }
           </div>
        
    //  return <button onClick={()=><Modal />}>{props.pokemonClicked.name} </button>



    
}





export default Profile;







