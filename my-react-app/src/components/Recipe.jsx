
const Recipe = (props) => {
    return (
        <>
            <div className="recipe">
                <h2 className="recipe-name">{props.recipe.name}</h2>
                
                <h4 className="section-name">Ingredients</h4>
                <ul className="ingredient-list">
                    {props.recipe.ingredients.map(ingredient => 
                        <li>
                            {ingredient}
                        </li>
                    )}
                </ul>

                <h4 className="section-name">Instructions</h4>
                <ol className="instruction-list">
                    {props.recipe.instructions.map(instruction => 
                        <li>
                            {instruction}
                        </li>
                    )}
                </ol>

            </div>
        </>
    )
}

export default Recipe