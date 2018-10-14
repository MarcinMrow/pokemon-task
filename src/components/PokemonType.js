import React from "react";

class PokemonType extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "",
      fontColor: "#fff"
    }
  }

  componentDidMount() {
    this.getColor(this.props.type);
  }

  getColor(type) {
    let background = "";
    let font = "";

    switch (type) {
      
       case "Normal":
        background = "#aa9";
        break;

      case "Fire":
        background = "#f42";
        break;

      case "Water":
        background = "#39f";
        break;

      case "Electric":
        background = "#fc3";
        font = "#333";
        break;

      case "Grass":
        background = "#7c5";
        font = "#333";
        break;

      case "Ice":
        background = "#6cf";
        font = "#333";
        break;

      case "Fighting":
        background = "#b54";
        break;

      case "Poison":
        background = "#a59";
        break; 

      case "Ground":
        background = "#db5";
        font = "#333";
        break;

      case "Flying":
        background = "#89f";
        font = "#333";
        break;

      case "Psychic":
        background = "#f59";
        break;

      case "Bug":
        background = "#ab2";
        break;

      case "Rock":
        background = "#ba6";
        break;

      case "Ghost":
        background = "#66b";
        break;

      case "Dragon":
        background = "#76e";
        break;

      case "Dark":
        background = "#754";
        break;

      case "Steel":
        background = "#aab";
        font = "#333";
        break;

      case "Fairy":
        background = "#e9e";
        font = "#333";
        break;
      
      default:
        console.log('test color');
        break;
    }
    this.setState({ 
      fontColor: font,
      backgroundColor: background
    });
  }

  render() {

    let colorStyle = {
      background: this.state.backgroundColor,
    };

    let fontStyle = {
      color: this.state.fontColor
    };

    return (
      <div style={colorStyle}>
        <p style={fontStyle}>{this.props.type}</p>
      </div>
    );
  }
};

export default PokemonType;