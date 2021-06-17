import React from 'react';

import {
  StyledHeader,
  AppNameComponent,
  SearchComponent,
  AppIcon,
  SearchInput,
  SearchIcon
} from './style';

export default function Header() {
  return (
    <StyledHeader>
      <AppNameComponent>
        <AppIcon src="hamburger.svg" alt="hamburger icon" />
        Recipe Finder
      </AppNameComponent>
      <SearchComponent>
        <SearchIcon src="search-icon.svg" alt="search icon" />
        <SearchInput placeholder="Search Recipe" />
      </SearchComponent>
    </StyledHeader>
  );
}
