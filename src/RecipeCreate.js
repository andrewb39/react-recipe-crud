import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, cuisine, photo, ingredients, preparation);
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={(event) => setCuisine(event.target.value)}
                value={cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                onChange={(event) => setPhoto(event.target.value)}
                value={photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={(event) => setIngredients(event.target.value)}
                value={ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={(event) => setPreparation(event.target.value)}
                value={preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
