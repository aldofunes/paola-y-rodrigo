import React, { useEffect, useState } from 'react';
import { isMobileOnly } from 'react-device-detect';
import * as photos from '../../images/photos';

const photoEntries = Object.entries(photos);

function shuffleArray(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function Gallery(): JSX.Element {
  return (
    <div className={`w-100 center pa3`}>
      {photoEntries.map(([name, photo]) => (
        <img
          key={name}
          src={photo}
          alt="Paola y Rodrigo"
          className="mv2 w-100"
        />
      ))}
    </div>
  );
}

export function Slider(): JSX.Element {
  useEffect(() => {
    shuffleArray(photoEntries);
  }, []);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = index + 1;
      if (newIndex >= photoEntries.length) newIndex = 0;
      setIndex(newIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const [name, url] = photoEntries[index];

  return (
    <div className="w-100 mw7 mh7 center mt4 pa3">
      <img id={name} src={url} alt="The Couple" className="w-100" />
    </div>
  );
}

export default function Photos(): JSX.Element {
  if (isMobileOnly) return <Gallery />;
  return <Slider />;
}
