import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import Layout from './Layout';
import SaveTheDate from './SaveTheDate';

import './App.css';

function App(): JSX.Element {
  return (
    <MemoryRouter>
      <Layout>
        <>
          <Route exact path="/" component={SaveTheDate} />

          <Route path="/la-boda">
            <h1>Hasta luegui</h1>
          </Route>
        </>
      </Layout>
    </MemoryRouter>
  );
}

export default App;
