import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(): JSX.Element {
  return (
    <nav className="ph3 ph5-ns avenir">
      <div className="nowrap overflow-x-auto tc">
        <NavLink
          exact
          className="link bg-white-70 black f5 f4-ns dib pa3"
          activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
          to="/"
        >
          Save the Date
        </NavLink>
        <NavLink
          exact
          className="link bg-white-70 black f5 f4-ns dib pa3"
          activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
          to="/their-story"
        >
          Nosotros
        </NavLink>
        <NavLink
          exact
          className="link bg-white-70 black f5 f4-ns dib pa3"
          activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
          to="/events"
        >
          La Boda
        </NavLink>
        <NavLink
          exact
          className="link bg-white-70 black f5 f4-ns dib pa3"
          activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
          to="/rsvp"
        >
          RSVP
        </NavLink>
        <NavLink
          exact
          className="link bg-white-70 black f5 f4-ns dib pa3"
          activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
          to="/travel"
        >
          Hospedaje
        </NavLink>
        <NavLink
          exact
          className="link bg-white-70 black f5 f4-ns dib pa3"
          activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
          to="/photos"
        >
          Fotos
        </NavLink>
        <NavLink
          exact
          className="link bg-white-70 black f5 f4-ns dib pa3"
          activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
          to="/gifts"
        >
          Mesa de Regalos
        </NavLink>
      </div>
    </nav>
  );
}
