import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header';
import Card from './components/card';
import Button from './components/button'
// import Pokelist from './components/pokelist'
// import toProfile from './components/profile'


class App extends Component {
  constructor (props) {
    super (props)

    this.state ={
      pokemon: [],
    }
  }

  updateState = (arr) => { 
    
    this.setState({
      pokemon: (this.state.pokemon || []).concat(arr)
    })
  }
  
 loadMore=()=>{
   console.log('hello world')
   const next = this.state.pokemon.length + 1
   console.log(next)
  return axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
  .then((response)=>{
  
    const pokeArray = response.data.results;
    const newArr = [];
    
    // console.log(pokeArray)
      pokeArray.map( (e, idx)=>{

      newArr.push({
            name: e.name, 
            icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
            id : next+idx + 1
      })
 })
 this.updateState(newArr)

})
}




  pagination(){

    return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then((response)=>{
      
        const pokeArray = response.data.results;
        const newArr = [];
        
        // console.log(pokeArray)
        pokeArray.map( (e, idx)=>{
  
          newArr.push({
                name: e.name, 
                icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
                id : idx + 1
          })
        })

        this.updateState(newArr)
        // console.log(this.state.pokemon.length)
        
      })
  }
  
  toProfile=(name)=>{
    console.log(name)
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response)=>{
  
  console.log(response)
  
    })
    
  
  
  
  }




  componentDidMount() {
    this.pagination().then( ()=>{   console.log(this.state.pokemon)
    });
  }

  componentDidUpdate(prevState, prevProps){

     console.log('updated',prevState)
     console.log('stateNow',this.state)


  }


  render() {
    return (
      <>
      < Header />
      <div className="container">
      
        {
          this.state.pokemon.map((e,i) => {
            return <Card key={i} pokeData={e} profile={this.toProfile} /> 
          })
        }            
      <Button loadMorePoke={this.loadMore}/>
      </div>     
     </>
    );
  }
}

export default App;