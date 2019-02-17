import React from 'react';
import './profile.css';
import ModalExample from './modal';
import HomeButton from './homeButton';


    
        

const Profile=(props)=>{

    return     <div >
                {
                    props.pokemonClicked.moves.map((e,i )=>{
                        return <ModalExample name={e[0]} url={e[1]} key={i}/>
                    })
                }
        
        </div>
           

}

export default Profile;

