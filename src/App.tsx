import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import { ContextProvider } from './Context'
export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </BrowserRouter>
  );
}
