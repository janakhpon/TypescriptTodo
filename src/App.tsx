import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
