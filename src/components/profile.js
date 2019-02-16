import React from 'react';
import './profile.css';
import Modal from './modal';


const Profile=(props)=>{
console.log('propsShow',props.showState)
console.log('img needed',props.pokemonClicked.profilePic)
return (
<div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <main>
        <h1>React Modal</h1>
        <Modal stateCheck={props.ShowState}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={props.show}>
          open
        </button>
      </main>
    );
  }
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
)
    
}





export default Profile








