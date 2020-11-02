const express = require('express')
const characters = require('../data/characters.json')
const ctrl = require('./controller')
const app = express()

app.use(express.json())

app.get('/api/characters', ctrl.getCharacters)
app.put('/api/characters/:id', ctrl.updateCharacters)
app.post('/api/characters', ctrl.createCharacters)
app.delete('/api/characters/:id', ctrl.deleteCharacters)