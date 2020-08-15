import getBakingRecipes from "./getBakingRecipes";

test("returns recipes in baking category", () => {
  // given
  const bakingRecipes = [
    {
      name: "Granola",
      ingredients: [
        "1 cup rolled oats",
        "1/4 tsp salt",
        "1/2 tsp ground cinnamon",
        "1/4 cup honey",
        "1/4 cup peanut butter",
        "1/2 tsp vanilla extract",
      ],
      method: [
        "Preheat oven to 325˚",
        "Mix together oats, salt and cinnamon",
        "Mix together honey, peanut butter and vanilla extract in a pot over low heat or in the microwave",
        "Combine oat and honey mixtures",
        "place mixture on parchment paper-lined baking sheets and bake for 20 minutes, stirring the mixture halfway through",
      ],
      category: "baking",
    },
    {
      name: "Swedish Apple Crisp",
      ingredients: [
        "8 apples, peeled and sliced",
        "1 tsp cinnamon",
        "1/2 cup water",
        "1/2 cup brown sugar",
        "1 cup flour",
        "1/2 cup rolled oats",
        "1/2 cup margarine or butter",
      ],
      method: [
        "Preheat oven to 375˚ and butter a 9x9 inch pan",
        "Mix together apples, 1/4 cup sugar, water and cinnamon and place into pan",
        "Mix flour, 1/4 cup sugar, and oats together",
        "Cut margarine into oat mixture and sprinkle over apples",
        "Bake 40-45 minutes",
        "Top with ice cream",
      ],
      category: "baking",
    },
  ];

  // then
  expect(getBakingRecipes()).toStrictEqual(bakingRecipes);
});
