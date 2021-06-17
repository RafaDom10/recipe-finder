import React from 'react';

import {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText
} from './style';

export default function Section() {
  return (
    <RecipeListContainer>
      <RecipeContainer>
        <CoverImage src="hamburger.svg" alt="" />
        <RecipeName>Mattar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="hamburger.svg" alt="" />
        <RecipeName>Mattar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="hamburger.svg" alt="" />
        <RecipeName>Mattar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="hamburger.svg" alt="" />
        <RecipeName>Mattar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="hamburger.svg" alt="" />
        <RecipeName>Mattar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
    </RecipeListContainer>
  );
}
