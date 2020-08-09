import React from "react";

import { RecipeWrapper } from "../../Elements/RecipeWrapper/";

import "./index.css";

class RecipeCard extends React.Component {
  render() {
    return (
      <RecipeWrapper>
        <h3>{this.props.name}</h3>
        <div>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 cup rolled oats</li>
            <li>1/4 tsp salt</li>
            <li>1/2 tsp ground cinnamon</li>
            <li>1/4 cup honey</li>
            <li>1/4 cup peanut butter</li>
            <li>1/2 tsp vanilla extract</li>
          </ul>
        </div>
        <div>
          <h4>Method:</h4>
          <ol>
            <li>preheat oven to 325˚</li>
            <li>mix together oats, salt and cinnamon</li>
            <li>
              mix together honey, peanut butter and vanilla extract in a pot
              over low heat or in the microwave
            </li>
            <li>combine oat and honey mixtures</li>
            <li>
              place mixture on parchment paper-lined baking sheets and bake for
              20 minutes, stirring the mixture halfway through
            </li>
          </ol>
        </div>
      </RecipeWrapper>
    );
  }
}

export default RecipeCard;
