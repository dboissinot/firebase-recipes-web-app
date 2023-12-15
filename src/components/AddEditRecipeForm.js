import {useState} from "react";

function AddEditRecipeForm({handleAddRecipe}){
    const [name, setName ] = useState("");
    const [category, setCategory ] = useState("");
    const [publishDate, setPublishDate ] = useState(new Date().toISOString().split("T")[0]);
    const [directions, setDirections ] = useState("");
    const [ingredients, setIngredients ] = useState([]);
    const [ingredientName, setIngredientName ] = useState("");

    return <form className="add-edit-recipe-form-container"> 
    <h2>Add a New Recipe</h2>
    <div classNAme="top-form-section">
        <div className="fields">
            <label className="recipe-label input-label">
                Recipe Name: 
                <input 
                    type="text" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="input-text"
                />
            </label>
        </div>
    </div>
    </form>
}

export default AddEditRecipeForm;