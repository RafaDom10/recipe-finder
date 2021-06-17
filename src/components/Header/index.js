import React, { useContext } from 'react';
import {
  AppIcon, AppNameComponent,
  SearchComponent, SearchIcon, SearchInput, StyledHeader
} from './style';

import { RecipeContext } from '../../context/RecipeContext';

export default function Header() {
  const { onInputText } = useContext(RecipeContext);

  return (
    <StyledHeader>
      <AppNameComponent>
        <AppIcon src="hamburger.svg" alt="hamburger icon" />
        Recipe Finder
      </AppNameComponent>
      <SearchComponent>
        <SearchIcon src="search-icon.svg" alt="search icon" />
        <SearchInput placeholder="Search Recipe" onChange={onInputText} />
      </SearchComponent>
    </StyledHeader>
  );
}
