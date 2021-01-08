import React from 'react';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div className="helvetica dark-gray">
      <Header />
      <Nav />

      {children}

      <Footer />
    </div>
  );
}
