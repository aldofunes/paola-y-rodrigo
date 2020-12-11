import React from 'react';
import Header from '../Header';
import Nav from '../Nav';

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <div className="helvetica">
      <Header />
      <Nav />

      {children}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}