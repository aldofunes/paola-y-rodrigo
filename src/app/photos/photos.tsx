import React from 'react';
import styles from './photos.module.css';
import * as photos from '../../images/photos';

export default function RSVP(): JSX.Element {
  return (
    <div>
      <div className="w-100 center mt4 pa3">
        <div className={styles.gallery}>
          {Object.entries(photos).map(([name, photo]) => (
            <img
              key={name}
              src={photo}
              alt="Paola y Rodrigo"
              className={styles.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
