//refer to Form.js
import React, {Component} from 'react'

class Characterlayout extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            name: '',
            year: '',
            posterImg: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd(e) {
        const {title, name, year, characterImg} = this.state
        e.preventDefault();
        this.props.addCharacter(title, name, year, characterImg)
    }

    render(){
        return(
            <form className="Form" onSubmit={this.handleAdd}>
                <input 
                name="title" 
                placeholder="Title"
                onChange={e=>this.handleChange(e)}
                />
                <input
                name="name"
                placeholder="Name"
                onChange={e=>this.handleChange(e)}
                />
                <input 
                name="year" 
                placeholder="Year"
                onChange={e=>this.handleChange(e)}
                />
                <input 
                name="characterImg" 
                placeholder="Character URL"
                onChange={e=>this.handleChange(e)}
                />
                <button type="submit">Add Character</button>
            </form>
        )
    }
}

export default Characterlayout