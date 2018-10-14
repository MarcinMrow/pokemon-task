import React, { Component } from 'react';
import PokemonList from './components/PokemonList';
// import ReduxThunk from 'redux-thunk';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    console.log('componentDidMount')
    const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        console.log(json)
        this.setState({
          pokemons: json.pokemon,
          pokemon: []
        });
    })
  }

  render() {

    return (
      <div className="App">
        <h1>List of Pokemon Charakters</h1>
        <div className="pokemons">
          <PokemonList
            pokemons={this.state.pokemons}
          /> 
        </div>
      </div>
    );
  }
}

export default App;