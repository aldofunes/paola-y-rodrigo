import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="ph3 ph5-ns avenir">
      <div className="nowrap overflow-x-auto tc bg-white-70">
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/">Save the date!</NavLink>
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/cortejo">Cortejo</NavLink>
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/eventos">Eventos</NavLink>
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/rsvp">RSVP</NavLink>
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/cuernavaca">Cuernavaca</NavLink>
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/libro">Libro de visitas</NavLink>
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/fotos">Fotos</NavLink>
        <NavLink exact className="link black-80 f5 f4-ns dib pa3" activeClassName="bg-black-10" to="/mesa">Mesa de bodas</NavLink>
      </div>
    </nav>
  );
}
