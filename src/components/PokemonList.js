import React from "react";
import Pokemon from "./Pokemon";
//import PropTypes from 'prop-types'

class PokemonList extends React.Component {

  render() {

    return (
      <div className="pokemon-list">
 				{this.props.pokemons.map((pokemon) => {
 					return (<Pokemon 
          key={pokemon.id}
          pokemon={pokemon}
          picture={this.props.picture}
          />) 
          })
 				} 
      </div>
    );
  }
}

export default PokemonList;