import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav(): JSX.Element {
  return (
    <nav className={`ph3 ph5-ns avenir relative ${styles.nav}`}>
      <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
      <label className={styles.menuIcon} htmlFor="menu-btn">
        <span className={styles.navicon}></span>
      </label>

      <ul className={`nowrap tc ${styles.menu}`}>
        <li className={styles.link}>
          <NavLink
            exact
            className="link bg-white-70 black f5 f4-ns db pa3"
            activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
            to="/"
          >
            Save the Date
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            exact
            className="link bg-white-70 black f5 f4-ns db pa3"
            activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
            to="/their-story"
          >
            Nosotros
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            exact
            className="link bg-white-70 black f5 f4-ns db pa3"
            activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
            to="/events"
          >
            La Boda
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            exact
            className="link bg-white-70 black f5 f4-ns db pa3"
            activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
            to="/rsvp"
          >
            RSVP
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            exact
            className="link bg-white-70 black f5 f4-ns db pa3"
            activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
            to="/travel"
          >
            Hospedaje
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            exact
            className="link bg-white-70 black f5 f4-ns db pa3"
            activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
            to="/photos"
          >
            Fotos
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            exact
            className="link bg-white-70 black f5 f4-ns db pa3"
            activeStyle={{ background: 'rgba(230,230,230,0.7)' }}
            to="/gifts"
          >
            Mesa de Regalos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
