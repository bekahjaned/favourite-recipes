import getCookingRecipes from "./getCookingRecipes";

test("returns recipes in cooking category", () => {
  // given
  const cookingRecipes = [
    {
      name: "Korean Beef",
      ingredients: [
        "1 pound lean ground beef",
        "1 tablespoon sesame oil",
        "3 cloves garlic , minced",
        "1 teaspoon fresh ginger , minced",
        "1/2 cup brown sugar",
        "1/4 cup lite soy sauce",
        "1 teaspoon sriracha",
        "2 green onions , only the green parts",
        "rice for serving",
      ],
      method: [
        "Heat a large pan over medium high heat",
        "Brown the meat with sesame oil, garlic and ginger",
        "Drain 75% of the fat, add brown sugar, soy sauce, and Sriracha",
        "Cook until the liquid has reabsorbed and the meat is shiny but not soupy",
        "Top with green onions, toss together and serve over rice",
      ],
      category: "cooking",
    },

    {
      name: "Burgers",
      ingredients: [
        "1 lb ground beef",
        "1/4 cup parmesan cheese (shredded or grated)",
        "1/4 cup bread crumbs",
        "1/2 tsp sea salt",
        "1/2 tsp black pepper",
        "1 tsp dried oregano",
        "1 tsp chili powder OR 1/4 tsp crushed chili peppers",
        "1 tsp garlic powder",
        "1 tsp onion powder",
        "1 tsp paprika",
        "1 tsp dried parsley",
      ],
      method: [
        "Mix all ingredients in large bowl",
        "Shape into patties and grill (or bake in oven 10-20 minutes",
        "Serve with a fresh bun and your choice of condiments",
      ],
      category: "cooking",
    },
  ];

  // then
  expect(getCookingRecipes()).toStrictEqual(cookingRecipes);
});
