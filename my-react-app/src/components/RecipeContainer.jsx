import { recipes } from '../assets/data.js'
import Recipe from './Recipe.jsx'

const RecipeContainer = () => {
    return (
        <>
            <div className="recipeContainer">
                <h1>Bread Recipes</h1>
                {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
            </div>
        </>
    )
}

export default RecipeContainer