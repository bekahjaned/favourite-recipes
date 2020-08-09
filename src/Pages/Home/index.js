import React from "react";

import { CardGrid } from "../../Elements/CardGrid/";
import RecipeCard from "../../Components/RecipeCard/";

class Home extends React.Component {
  render() {
    return (
      <CardGrid>
        <RecipeCard name="Granola" />
        <RecipeCard name="Granola" />
        <RecipeCard name="Granola" />
        <RecipeCard name="Granola" />
      </CardGrid>
    );
  }
}

export default Home;
