import { useState } from 'react'
import { recipes } from '../assets/data.js'
import Recipe from './Recipe.jsx'

const RecipeContainer = () => {
    const [selected, setSelected] = useState(recipes[0])
    return (
        <>
            <div className="recipeLayout">
                <aside className='sidebar'>
                    <h2 className='sidebar-title'>Bread Recipes</h2>
                    <ul className='card-list'>
                        {recipes.map(recipe => (
                            <li key={recipe.name} 
                                className={`card-small ${selected.name === recipe.name ? "active" : ""}`}
                                onClick={() => setSelected(recipe)}
                            >
                                <div className='card-small-title'>{recipe.name}</div>
                                {recipe.summary && <div className='card-small-summary'>{recipe.summary}</div>}

                            </li>
                        ))}
                    </ul>
                </aside>
                
                <main className='detail'>
                    <Recipe recipe={selected} />
                </main>
                
            </div>
        </>
    )
}

export default RecipeContainer