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
        <Button color='clear' className=' btn btn-outline-secondary' onClick={e=>this.toggle(this.props.url)}>{this.props.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
              <h2 className='edit'>{this.state.name.toUpperCase()}</h2>
              <h2 className='edit'>Type : {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}</h2>
              <h2 className='edit'>Power: {!this.state.power ? 0: this.state.power }</h2>
              <h2 className='edit'>PP   : {this.state.pp}</h2>
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