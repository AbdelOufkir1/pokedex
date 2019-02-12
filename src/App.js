import React, { Component } from 'react';

import  axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       pokemon : [ 
         {          name : 'pikachu',
                    image: 'www.pika.com',
                    number: '001',
      }, ]
    }

import Header from './components/header'

class App extends Component {
  render() {
    return (
     <Header />
    );

  }
componentDidMount(){
this.pagination()


}


  pagination(){
     return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
     .then((response)=>{

      // console.log(response)
      this.setState({
          pokemon : response.data.results,

      })
    console.log(this.state.pokemon)


     })
  }
  
    render() {
      return (
       <h1> Hello Pokedex Pagess </h1>
      );
    }
  }

export default App;
