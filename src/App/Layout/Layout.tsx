import React from 'react';
import Header from '../Header';
import Nav from '../Nav';

interface Props {
  children: JSX.Element;
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
