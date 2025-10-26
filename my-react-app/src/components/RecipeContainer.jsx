import { recipes } from '../data/data.js'
import Recipe from './Recipe.jsx'

const RecipeContainer = () => {
    return (
        <>
            <div className="recipeContainer">
                {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
            </div>
        </>
    )
}

export default RecipeContainer