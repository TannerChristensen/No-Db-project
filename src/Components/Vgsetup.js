import React from 'react' 

function Vgsetup(props){
    const { deleteCharacter, character } = props

    return ( 
    <div className="Vgsetup"
     onDoubleClick={() => 
    deleteCharacter(character.id)}
    >
        <img alt={props.character.title} className="character-img" src={props.character.posterImg}/>
        <div className="character-info">
            <p>{props.character.title}</p>
            <p>{props.character.name}</p>
            <p>{props.character.year}</p>
        </div>
    </div>
    )
}

export default Vgsetup