import React from "react";

import { CardGrid } from "../../Elements/CardGrid/";
import RecipeCard from "../../Components/RecipeCard/";

import recipes from "../../assets/recipes.json";

class Cooking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: recipes,
      category: "cooking",
    };
  }

  getCookingRecipes = () => {
    const cookingRecipes = this.state.recipes.filter((recipe) => {
      const category = this.state.category;
      return recipe.category === category;
    });
    return cookingRecipes;
  };

  render() {
    const cookingRecipes = this.getCookingRecipes();
    const displayCookingRecipes = cookingRecipes.map((recipe) => {
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

    return <CardGrid>{displayCookingRecipes}</CardGrid>;
  }
}
export default Cooking;
