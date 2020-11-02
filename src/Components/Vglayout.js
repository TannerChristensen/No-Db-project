import React, {Component} from "react";
import Vgsetup from "./Vgsetup"
import Characterlayout from './Characterlayout'
import characters from '../data/characters.json'

class Vglayout extends Component{
    constructor(){
        super();
        this.state = {
            characters: characters
        }

        this.addCharacter = this.addCharacter.bind(this);
    }

deleteCharacter = (id) => {
    const {characters} = this.state
      const index = characters.findIndex((character) => character.id === id) 
      const newArr = [...characters]
      newArr.splice(index,1)
      this.setState({
          characters: newArr
      })
}

addCharacter(title, name, year, characterImg){
  const {characters} = this.state
  const id = characters[characters.length - 1].id + 1
  const newCharacter = {
      id: id,
      title: title,
      name: name,
      year: year,
      characterImg: characterImg
  };
  const newArr = [...characters, newCharacter]
  this.setState({
      characters: newArr
  });
}




    render(){
          const charactersMap = this.state.characters.map((character)  => {
              return <Vgsetup deleteCharacter={this.deleteCharacter} key={character.id} character={character}/>
          })
        return (
        <div className="Vglayout">
            <Characterlayout addCharacter={this.addCharacter}/>
            {charactersMap}
        </div>
        )
    }
}
export default Vglayout
