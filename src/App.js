import React from 'react'

import Layout from './components/Layout';

import GlobalStyle from './styles/global';

import { RecipeProvider } from './context/RecipeContext';

export default function App() {
  return (
    <RecipeProvider>
      <GlobalStyle />
      <Layout />
    </RecipeProvider>
  );
}
