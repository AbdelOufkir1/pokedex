// import React, { Component } from 'react';
// import axios from 'axios';
// import Header from './components/header';
// import Card from './components/card';
// import Button from './components/button'
// import Profile from './components/profile'
// // import Modal from './components/modal'

// // import Pokelist from './components/pokelist'
// // import toProfile from './components/profile'


// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state ={
//       pokemon: [],
//       view: false,
//       pokemonProfile : [],
//       pokemonChosenIdx : 0,
//       show: false,
//       modal: false,
//     }
//   }

//   updateState = (arr) => { 
    
//     this.setState({
//       pokemon: (this.state.pokemon || []).concat(arr)
//     })
//   }
  

//    showModal=()=>{
//     this.setState({
//       modal : true
//     })
    
    
    
//     }


//  loadMore=()=>{
//    console.log('hello world')
//    const next = this.state.pokemon.length + 1
//    console.log(next)
//   return axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
//   .then((response)=>{
  
//     const pokeArray = response.data.results;
//     const newArr = [];
    
//     // console.log(pokeArray)
//       pokeArray.map( (e, idx)=>{

//       newArr.push({
//             name: e.name, 
//             icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
//             id : next+idx + 1
//       })
//  })
//  this.updateState(newArr)

// })
// }




//   pagination(){

//     return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
//       .then((response)=>{
      
//         const pokeArray = response.data.results;
//         const newArr = [];
        
//         // console.log(pokeArray)
//         pokeArray.map( (e, idx)=>{
  
//           newArr.push({
//                 name: e.name, 
//                 icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
//                 id : idx + 1
//           })
//         })

//         this.updateState(newArr)
//         // console.log(this.state.pokemon.length)
        
//       })
//   }
  
//   toProfile=(name)=>{
//         const profileArr =[]
//         console.log(name)
//         return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//             .then((response)=>{
//                   console.log('this is response',response)
//                   const pokemonData = response.data
//                   profileArr.push(
//                       { name: response.data.name,
//                         id:  response.data.id,

//                         profilePic : `https://img.pokemondb.net/artwork/${name}.jpg`,


//                       sprites:{
//                           back_default: pokemonData.sprites.back_default,
//                           back_shiny:pokemonData.sprites.back_shiny,
//                           front_default: pokemonData.sprites.front_default,
//                           front_shiny: pokemonData.sprites.front_shiny,
//                           },

//                       types : [pokemonData.types.map(e=>{
//                         return e.type.name
//                       })],

//                       stats : pokemonData.stats.map(e=>{
//                          return {
//                             statName : e.stat.name,
//                             baseStat : e.base_stat,
//                          }
                         

//                       }),

//                       /*moveName : pokemonData.moves.map(e=>{
//                         return [
//                           e.move.name,
//                         ]

//                       }),
//                       moveUrl : pokemonData.moves.map(e=>{
//                         return [
//                           e.move.url,
//                         ]

//                       }),*/
//                       move : pokemonData.moves.map(e=>{
//                         return [
//                           e.move.name, e.move.url,
//                         ]

//                       })

                      
//                   })
                  
//                 }).then(()=>{

//                     this.setState({
//                       view: !this.state.view,
//                       pokemonProfile: (this.state.pokemonProfile || []).concat(profileArr),
                     
//                     }, ()=>{
//                     this.setState({
//                       pokemonChosenIdx : this.state.pokemonProfile.length -1


//                     })
//                     })

//                   })
//                 }
                  

//           // return profileArr
            
          
              
    
  
    
        
  

//           showModal = () => {
//             this.setState({ show: true });
//           };
        
//           hideModal = () => {
//             this.setState({ show: false });
//           };
        



//   componentDidMount() {
//     this.pagination().then( ()=>{   console.log(this.state.pokemon)
//     });
//   }

//   componentDidUpdate(prevState, prevProps){

//      console.log('updated',prevState)
//      console.log('stateNow',this.state)


//   }


//   render() {
//   console.log(this.state)
//         // const view1 = this.state.pokemon.map((e,i) => {
//         // return <Card key={i} pokeData={e} profile={this.toProfile} /> 

//         // })
   
//         // const view2 = <Profile pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]}/>


      
    
//     return (
//       <>
//       < Header />
//       <div className="container">
      
//         {/* {  
              
//           this.state.pokemon.map((e,i) => {
//             return <Card key={i} pokeData={e} profile={this.toProfile} /> 
    
//             })} */}

//          { this.state.view === false ? this.state.pokemon.map((e,i) => {
//             return <Card key={i} pokeData={e} profile={this.toProfile} /> 
    
//             })  : <Profile modal={this.showModal} pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]} showState = {this.state.show}  hide={this.hideModal}  />
//         }    

//         {/* {
//           this.state.view ? <Modal /> : null
//         } */}

//         {/* {this.state.view === 1 ?   :  this.state.pokemon.map((e,i) => {
//             return <Card key={i} pokeData={e} profile={this.toProfile} /> 
    
//             }) } */}
//       <Button loadMorePoke={this.loadMore}/>
//       </div>     
//      </>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header';
import Card from './components/card';
import Button  from './components/button';
import HomeButton from './components/homeButton';
import Profile from './components/profile';
import Modal from './components/modal';
import { Container } from 'reactstrap';

// import Pokelist from './components/pokelist'
// import toProfile from './components/profile'


class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      pokemon: [],
      view: false,
      pokemonProfile : [],
      pokemonChosenIdx : 0,
      show: false,
      modal: false,
    }

    this.homeLink = this.homeLink.bind(this);
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
        const profileArr =[]
        console.log(name)
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response)=>{
                  console.log('this is response',response)
                  const pokemonData = response.data
                  profileArr.push(
                      { name: response.data.name,
                        id:  response.data.id,

                        profilePic : `https://img.pokemondb.net/artwork/${name}.jpg`,


                      sprites:{
                          back_default: pokemonData.sprites.back_default,
                          back_shiny:pokemonData.sprites.back_shiny,
                          front_default: pokemonData.sprites.front_default,
                          front_shiny: pokemonData.sprites.front_shiny,
                          },

                      types : [pokemonData.types.map(e=>{
                        return e.type.name
                      })],

                      stats : pokemonData.stats.map(e=>{
                         return [
                            e.stat.name,
                            e.base_stat,

                         ]

                      }),

                      moves : pokemonData.moves.map(e=>{
                        return [
                          e.move.name, e.move.url,


                      ]

                      })

                      
                  })
                  
                }).then(()=>{

                    this.setState({
                      view: !this.state.view,
                      pokemonProfile: (this.state.pokemonProfile || []).concat(profileArr),
                     
                    }, ()=>{
                    this.setState({
                      pokemonChosenIdx : this.state.pokemonProfile.length -1


                    })
                    console.log(this.state)
                    })

                  })
                }
                  

          // return profileArr
            
          
              
    
  
    
  
  
  

          // showModal = () => {
          //   this.setState({ show: true });
          // };
        
          modal=()=>{
            this.setState({ modal: true });

          }
          hideModal = () => {
            this.setState({ show: false });
          };
        
          homeLink=()=>{
            console.log('we outta here')
            this.setState({
              view : false,
            },()=>console.log('homeState',this.state.view))

          }

test=()=>{
  console.log('please work')
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
  console.log(this.state)
  console.log('pokeClicked', this.state.pokemonProfile[this.state.pokemonChosenIdx])
        // const view1 = this.state.pokemon.map((e,i) => {
        // return <Card key={i} pokeData={e} profile={this.toProfile} /> 

        // })
   
        // const view2 = <Profile pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]}/>


      
    
    return (
      <>
      <Header />
      <Container>
        {/* {this.state.view===true ? <HomeButton test={this.homeLink} /> : null} */}
    
         { this.state.view === false ? this.state.pokemon.map((e,i) => {
            return <Card key={i} pokeData={e} profile={this.toProfile} /> 
    
            })  : <Profile pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]} showState = {this.state.show} modal={this.modal} click={this.homeLink}  />
        }    
               


       

{/* //   <div>
//         <button type="button" className='homeLink' onClick={this.test}>Home</button>
//         <section>>></section>
//         <a >pokename</a></div> 
// } */}


        {
          this.state.modal ? <Modal /> : null
        }

      <Button loadMorePoke={this.loadMore}/>
      </Container>
     </>
    );
  }
}

export default App;