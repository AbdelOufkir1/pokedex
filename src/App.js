import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/card';
import Pokelist from './components/pokelist';
import Profile from './components/profile';
import Modal from './components/modal';
import Footer from './components/footer';
import Dropdown from './components/dropdown';
import Header from './components/header';
import './App.css';
import Buttons from './components/button';



// import toProfile from './components/profile';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
      view: false,
      pokemonProfile: [],
      pokemonChosenIdx: 0,
      show: false,
      modal: false,
      searchbar: Pokelist,
      display: [],
      load: true,
    }
  }

  homeLink = () => {
    this.setState({ view: false })
  }

  updateState = (arr) => {

    this.setState({
      pokemon: (this.state.pokemon || []).concat(arr)
    })
  }

  loadMore = () => {
    const soundObject = new Audio(require('./assets/pokemon-gotta-catch-em-all-lyrics-_audiotrimmer.com_.mp3'));
    soundObject.play();
    

    const next = this.state.pokemon.length + 1;
    
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
      .then((response) => {

        const pokeArray = response.data.results;
        const newArr = [];

        pokeArray.map((e, idx) => {

          newArr.push({
            name: e.name,
            icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
            id: next + idx + 1
          })
        })
        this.updateState(newArr)

      })
  }


  pagination() {

    return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then((response) => {

        const pokeArray = response.data.results;
        const newArr = [];

        pokeArray.map((e, idx) => {

          newArr.push({
            name: e.name,
            icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
            id: idx + 1
          })
        })

        this.updateState(newArr)

      })
  }

  toProfile = (name) => {
    const profileArr = []
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        const pokemonData = response.data

        // console.log('this is response',response.data.sprites.back_female)
        const spritesKeys = Object.keys(pokemonData.sprites)
        const spritesList = spritesKeys.map((e,i)=>{
            return { name : `${e}` , 
                       url : `${response.data.sprites[e]}` }

        })
          // console.log('spriteslist',spritesList)
        profileArr.push(
          {
            name: response.data.name,
            id: response.data.id,
            profilePic: `https://img.pokemondb.net/artwork/${name}.jpg`,
            sprites: spritesList,
            types: pokemonData.types.map(e => {
              return e.type.name
            }),
            stats: pokemonData.stats.map(e => {
              return [
                e.stat.name,
                e.base_stat,
              ]
            }),
            moves: pokemonData.moves.map(e => {
              return [
                e.move.name, e.move.url,
              ]
            })
          })
      }).then(() => {
        this.setState({
          view: true,
          pokemonProfile: (this.state.pokemonProfile || []).concat(profileArr),
        }, () => {
          this.setState({
            pokemonChosenIdx: this.state.pokemonProfile.length - 1
          })
          // console.log(this.state)
        })

      })
  }

  modal = () => {
    this.setState({ modal: true });

  }
  hideModal = () => {
    this.setState({ show: false });
  };


  handletyping = (e) => {
    const type = e.target.value;
    const filterPokeList = (list) => {
      const results = this.state.searchbar.filter(searchbar => searchbar.toLowerCase().includes(list)) //the e is the list
      this.setState({ display: results })
    }
    if (type.length === 0) {
      this.setState({ display: [] })
    }
    else if (isNaN(type)) {
      filterPokeList(type)
    }
    else {
      const index = Number(type) - 1
      const results = [this.state.searchbar[index]]
      this.setState({ display: results })
    }
  }

  handleDropdownClick = (e) => {
    this.toProfile(e.target.innerHTML.toLowerCase());
  }

  handleOnScroll = () => {

    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;


    if (scrolledToBottom && this.state.view === false) {
      setTimeout(this.loadMore(), 3000 )
    }
  }


  componentDidMount() {
    this.pagination().then(() => {
      // console.log(this.state.pokemon)
    });
  
   window.addEventListener('scroll', this.handleOnScroll); 

  }

  componentDidUpdate(prevState, prevProps) {

    // console.log('updated', prevState)
    // console.log('stateNow', this.state)

  }



  render() {
    return (
      <>
        <div className="container-fluid backgroundColor">
          <Header onChange={this.handletyping} />
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="container searchDisplay">
                {this.state.display.slice(0, 5).map((e, i) => {
                  return <Dropdown click={this.handleDropdownClick} name={e} />
                })
                }
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="container">
            {this.state.view === false ? this.state.pokemon.map((e, i) => {
              return <Card key={i} pokeData={e} profile={this.toProfile} />

            }) : <Profile pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]} showState={this.state.show} modal={this.modal} click={this.homeLink} />
            }
            {
              this.state.view===false  ? <Buttons loadMorePoke={this.loadMore} /> : null 
            }
            {
              this.state.modal ? <Modal /> : null
            }
          </div>
          <Footer />
        </div>

      </>
    );
  }
}

export default App;