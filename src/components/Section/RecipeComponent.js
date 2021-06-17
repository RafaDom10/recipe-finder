import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogActions } from '@material-ui/core';

import {
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText
} from './style';

export default function RecipeComponent(props) {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSeeMore = () => {
    window.open(recipeObj.url);
  }

  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr key={Math.random()}>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={handleSeeMore}>See More</IngredientsText>
          <SeeMoreText onClick={handleClose}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeContainer >
        <CoverImage src={recipeObj.image} alt="" />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={handleOpen}>
          Ingredients
        </IngredientsText>
        <SeeMoreText onClick={handleSeeMore}>
          See Complete Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>

  );
}
