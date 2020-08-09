import React from "react";

import { CardGrid } from "../../Elements/CardGrid/";
import RecipeCard from "../../Components/RecipeCard/";

import recipes from "../../assets/recipes.json";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: recipes,
    };
  }

  render() {
    const getRecipes = this.state.recipes.map((recipe) => {
      const { name, ingredients, method } = recipe;
      return (
        <RecipeCard
          key={name}
          name={name}
          ingredients={ingredients}
          method={method}
        />
      );
    });

    return <CardGrid>{getRecipes}</CardGrid>;
  }
}
export default Home;
