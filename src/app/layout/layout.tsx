import React from 'react';
import Header from '../header';
import Nav from '../nav';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div className="helvetica">
      <Header />
      <Nav />

      {children}
    </div>
  );
}
