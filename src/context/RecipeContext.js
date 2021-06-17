import React, { useState, createContext } from 'react';

import Axios from 'axios';

export const RecipeContext = createContext();

const APP_ID = 'a6dd6d82';
const APP_KEY = '4ba272c8356da61c453955f09e090ad7';

export function RecipeProvider(props) {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeList,
        onInputText: onTextChange
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );

}
