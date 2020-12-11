import React from 'react';

export default function Header(): JSX.Element {
  return (
    <header className="black tc pv4 avenir">
      <h1
        style={{ fontFamily: 'Rouge Script', fontSize: '6em' }}
        className="ma0 i fw1 f1"
      >
        Paola y Rodrigo
      </h1>
      <h2 className="mt2 mb0 f5 fw4 ttu tracked">6 de marzo, 2021</h2>
    </header>
  );
}
