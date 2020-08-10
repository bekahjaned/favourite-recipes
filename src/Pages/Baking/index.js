import React from "react";

import { CardGrid } from "../../Elements/CardGrid/";
import RecipeCard from "../../Components/RecipeCard/";

import recipes from "../../assets/recipes.json";

class Baking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: recipes,
      category: "baking",
    };
  }

  getBakingRecipes = () => {
    const bakingRecipes = this.state.recipes.filter((recipe) => {
      const category = this.state.category;
      return recipe.category === category;
    });
    return bakingRecipes;
  };

  render() {
    const bakingRecipes = this.getBakingRecipes();
    const displayBakingRecipes = bakingRecipes.map((recipe) => {
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

    return <CardGrid>{displayBakingRecipes}</CardGrid>;
  }
}

export default Baking;
