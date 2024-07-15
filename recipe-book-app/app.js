const API_KEY = '4487cfa65baf43d0828ccaec7a9ea331';
const recipeListEl = document.getElementById("recipe-list");
async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();

    return data.recipes;
}

function dispalyRecipe(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) =>{
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe Image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        const recipeIngredientsEl = document.createElement("p");
        recipeIngredienstEl.innerHTML = `
        <strong>Ingredients: </strong> ${recipe.extendedIngredients.map((ingredient) =>ingredient.original).join(", ")}`
// we use a map for the dynamic variable because a map returns an array

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";
        
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientEl);
        recipeItemEl.appendChild(recipeLinkEl);




        recipeListEl.appendChild(recipeItemEl);
    });
}



async function init(){
    const recipes = await getRecipes()
    console.log(recipes);
    dispalyRecipe(recipes);
}
init();