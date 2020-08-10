import React from "react";

import { RecipeWrapper } from "../../Elements/RecipeWrapper/";

import "./index.css";

class RecipeCard extends React.Component {
  render() {
    const ingredientList = this.props.ingredients.map((ingredient) => {
      return <li>{ingredient}</li>;
    });

    const methodList = this.props.method.map((step) => {
      return <li>{step}</li>;
    });

    return (
      <RecipeWrapper>
        <h3>{this.props.name}</h3>
        <div>
          <h4>Ingredients:</h4>
          <ul>{ingredientList}</ul>
        </div>
        <div>
          <h4>Method:</h4>
          <ol>{methodList}</ol>
        </div>
      </RecipeWrapper>
    );
  }
}

export default RecipeCard;
