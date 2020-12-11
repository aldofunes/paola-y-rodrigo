import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import Layout from './Layout';

import './App.css';

function App() {
  return (
    <MemoryRouter>
      <Layout>
        <>
          <h1>Holi</h1>

          <Route path="/eventos">
            <h1>Hasta luegui</h1>
          </Route>
        </>
      </Layout>
    </MemoryRouter>
  );
}

export default App;
