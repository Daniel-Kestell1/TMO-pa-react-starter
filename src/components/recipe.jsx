import React, { Component } from 'react';


class Recipe extends Component {

    style = {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    }

    style_background = {
        backgroundColor: "lavender"
    }


    render(props) { 

        console.log('recipe props: ', this.props)
        return <React.Fragment>
            <div style={this.style_background}>
           <div style={this.style}>Recipe:</div> 
           <div>
               {this.props.recipe.name}
            </div>  
            <div style={this.style}> Instructions:</div> 
            <div>
               {this.props.recipe.instructions}
            </div> 
            </div>


        </React.Fragment>;
    }
}
 
export default Recipe;