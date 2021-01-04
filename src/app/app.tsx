import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './layout';
import SaveTheDate from './save-the-date';
import TheWedding from './events';
import RSVP from './rsvp';
import Travel from './travel';
import GuestBook from './guest-book';
import Photos from './photos';
import Gifts from './gifts';

import './app.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={SaveTheDate} />
        <Route exact path="/events" component={TheWedding} />
        <Route exact path="/rsvp" component={RSVP} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/guest-book" component={GuestBook} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/gifts" component={Gifts} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
