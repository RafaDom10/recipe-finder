import React from 'react'

import Layout from './components/Layout';

import { RecipeProvider } from './context/RecipeContext';

export default function App() {
  return (
    <RecipeProvider>
      <Layout />
    </RecipeProvider>
  );
}
