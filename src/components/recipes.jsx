import React, { Component } from 'react';
import Recipe from './recipe';


class Recipes extends Component {

    state = {
        recipes: [],
        clicked: false,
        inputName: "",
        inputInstructions: "",
        latestId: 0
    }

    renderRecipes(){
        if(this.state.recipes.length === 0) return <p>There are no recipes to list</p>
    }

    submitRecipe = () =>{

        const recipes = [...this.state.recipes];

        this.setState({latestId: this.state.latestId+1});

        recipes.push({id:this.state.latestId, name:this.state.inputName, instructions: this.state.inputInstructions});
        this.setState({recipes});

        this.setState({clicked: false});
        this.setState({inputName: ""});
        this.setState({inputInstructions: ""});
    }

    addRecipe = () => {
        console.log('Clicked', this.state.clicked);
        this.setState({clicked: true});
    }

    addForm(){

        console.log('addForm')
        if(this.state.clicked === true) return <form>

            <label>
                Recipe Name:
                <input type="text" name="name"  onChange={evt => this.updateInputName(evt)}/>
            </label>
            <label>
                Recipe Instructions:
                <input type="text" name="Submit" onChange={evt => this.updateInputInstructions(evt)}/>
            </label>
            <button type="button" onClick={this.submitRecipe} className="btn btn-secondary">Submit</button>}
        </form>
    }

    updateInputName(evt){
        console.log('Update Input Name', evt.target.value);
        this.setState({inputName: evt.target.value});
    }

    updateInputInstructions(evt){
        console.log('Update Input Instructions', evt.target.value);
        this.setState({inputInstructions: evt.target.value});
    }

    render() { 

        console.log('recipes', this.state.recipes);
        return <div>

        {this.state.recipes.map(recipe => (<Recipe key={recipe.id} recipe={recipe}/>))}

        {this.renderRecipes()}

        <button onClick={this.addRecipe} className="btn btn-secondary btn-sm">Add Recipes</button>

        {this.addForm()}

        </div>;
    }
}
 
export default Recipes;