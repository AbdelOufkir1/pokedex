import React from 'react';
import './profile.css';
// import  showModal from './modal';
import ModalExample from './modal'
// import { HomeButton } from './button'


const Profile=(props)=>{
console.log('propsShow',props.showState)
console.log('img needed',props.pokemonClicked.profilePic)
console.log('right one',  props.pokemonClicked.moves)
console.log('model', props.modal)
console.log(props.home)
  return  <>
  {/* <HomeButton home={props.home} name={props.pokemonClicked.name}/> */}
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
        </>
        



    
}





export default Profile;








