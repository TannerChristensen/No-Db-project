const characters = require('../data/characters.json')

let id = characters[characters.length -1].id + 1 

module.exports = {

    getCharacters: (req, res) => {
        res.status(200).send(characters)
    },


    updateCharacters: (req, res) => {
        const {updatedCharacter} = req.body
        const {id} = req.params
        const index = characters.findIndex((characters)=> characters.id === +id)

        if(index === -1){
        return res.status(400).send("Character couldnt be found")
        }

        characters[index] = {...characters[index], ...updatedCharacter}
        res.status(200).send(characters)
    },


    createCharacters: (req, res)=> {
        const {newCharatcer} = req.body
        newCharatcer.id = id
        id++
        characters.push(newCharatcer)
        res.status(201).send(characters)
    },


    deleteCharacters: (req, res)=> {
        const {id} = req.params
        const index = characters.findIndex((character)=> character.id === +id)
        if(index === -1){
            return res.status(400).send("Character couldnt be found")
        }
    }



}