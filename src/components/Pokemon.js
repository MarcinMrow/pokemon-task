import React from 'react';
import PokemonType from "./PokemonType";

class Pokemon extends React.Component {

	render() {

		const information = " #" + this.props.pokemon.num + ' '
		 + this.props.pokemon.name;

		const type = this.props.pokemon.type;

		const picture = {
		 	backgroundImage: `url('${this.props.pokemon.img}')`
		};

		/*let types = [];
    this.props.type.forEach((pokemon, id) => {
      types.push(<PokemonType
      	type={this.props.pokemon.type}
      	key={id} />)
    });*/

		return (
			<div className="pokemon">
				<div className="pokemon-picture" style={picture}>		
				</div>
				<div className="pokemon-title">
					<h4>{information}</h4>
				</div>
				<div>
					{
					<PokemonType
						type={this.props.pokemon.type}
						/>
					}
				</div>
			</div>
		);
	}
}

export default Pokemon;