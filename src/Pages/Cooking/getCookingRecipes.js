const recipes = [
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

const getCookingRecipes = () => {
  const cookingRecipes = recipes.filter((recipe) => {
    const category = "cooking";
    return recipe.category === category;
  });
  return cookingRecipes;
};

module.exports = getCookingRecipes;
