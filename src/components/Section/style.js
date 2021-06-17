import styled from 'styled-components';

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const CoverImage = styled.img`
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 10px 0;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  font-weight: bold;
  border: solid 3px #63954b;
  color: #000;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: #63954b;
  text-align: center;

`;

export const SeeMoreText = styled(IngredientsText)`
  color: #f57e80;
  border: solid 3px #f57e80;
`;
