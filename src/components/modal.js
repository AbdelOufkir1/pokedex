import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'


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

  toggle(e, url) {
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
      }).catch(e=>console.log)
   
  }

 

  render() {
    return (
      <div>
        <Button color="danger" onClick={e=>this.toggle(e, this.props.url)}>{this.props.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.exit}></ModalHeader>
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
      </div>
    );
  }
}

export default ModalExample;