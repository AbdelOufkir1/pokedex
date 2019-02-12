import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header';
import Card from './components/card';
import Button from './components/button'
import Pokelist from './components/pokelist'

class App extends Component {
  constructor (props) {
    super (props)

    this.state ={
      pokemon: [],
    }
  }
  
  pagination(){

    return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then((response)=>{
      
        const pokeArray = response.data.results;
        const newArr = [];
  
        pokeArray.map( (e, idx)=>{
  
          newArr.push({
                name: e.name, 
                icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
                id : String(idx)
          })
        })
        this.setState({
          pokemon: [].concat(newArr)
        })
      })
  }
  

  componentDidMount() {
    this.pagination();
  }

  render() {
    return (
      <>
      < Header />
      <div className="container">
      
        {
          this.state.pokemon.map((e,i) => {
            return <Card key={i} pokeData={e} /> 
          })
        }            
      <Button />
      </div>     
     </>
    );
  }
}

export default App;