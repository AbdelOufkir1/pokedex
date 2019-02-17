import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import './modal.css'


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      modal: false,
      name: '',
      type: '',
      power:0,
      pp: 0,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle( url) {

    if(this.state.modal === false){
      axios.get(`${url}`).then((response)=>{
        console.log(response)
        console.log(url)
        this.setState({
            modal: !this.state.modal,
            name: response.data.name,
            type: response.data.type.name,
            power:response.data.power,
            pp: response.data.pp
      
      
          })
      }).catch(e=>console.log(e))
    }
    else{
        this.setState({
            modal: false
        })
    }
  }

  
 

  render() {
      
    return (
    <>
        <Button color='danger' className='profile' onClick={e=>this.toggle(this.props.url)}>{this.props.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
              <h2>{this.state.name}</h2>
              <h2>type : {this.state.type}</h2>
              <h2>power: {this.state.power}</h2>
              <h2>pp   :{this.state.pp}</h2>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </>
    );
  }
}

export default ModalExample;