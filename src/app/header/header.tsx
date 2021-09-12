import React from 'react';
import styles from './header.module.css';

export default function Header(): JSX.Element {
  return (
    <header className="black tc pv4 avenir">
      <h1 className={`ma0 i fw1 ${styles.title}`}>Paola y Rodrigo</h1>
      <h2 className={`mt1 mb0 fw4 ttu tracked ${styles.subtitle}`}>
        27 de noviembre, 2021
      </h2>
    </header>
  );
}
