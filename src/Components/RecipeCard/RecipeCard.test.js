import React from "react";
import renderer from "react-test-renderer";

import RecipeCard from "./index.js";

it("renders Recipe Card", () => {
  // given
  const name = "name";
  const ingredients = ["one", "two", "three"];
  const method = ["one", "two", "three"];

  // when
  const tree = renderer
    .create(
      <RecipeCard name={name} ingredients={ingredients} method={method} />
    )
    .toJSON();

  // then
  expect(tree).toMatchSnapshot();
  expect(
    tree.children
      .find((child) => child.type === "div")
      .children.find((child) => child.type === "ul").children.length
  ).toEqual(ingredients.length);
});
