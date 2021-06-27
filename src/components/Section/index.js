import React, { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';
import RecipeComponent from './RecipeComponent';
import { RecipeListContainer, Placeholder } from './style';

export default function Section() {
  const { recipeList } = useContext(RecipeContext);

  return (
    <RecipeListContainer>
      {recipeList.length ? recipeList.map((recipeObj) => (
        <RecipeComponent recipeObj={recipeObj.recipe} key={Math.random()}/>
      )) : <Placeholder src="food.svg"/>}
    </RecipeListContainer>
  );
}
