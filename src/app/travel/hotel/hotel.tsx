// @flow
import { FaLink, FaMap } from 'react-icons/fa';
import React from 'react';

interface Props {
  address: string;
  imageUrl: string;
  mapUrl?: string;
  name: string;
  websiteUrl: string;
}

export default function Hotel({
  address,
  imageUrl,
  mapUrl,
  name,
  websiteUrl,
}: Props): JSX.Element {
  return (
    <div className="pa2 w-100 w-50-m w-33-l overflow-hidden helvetica">
      <div
        className="cover bg-center h-100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black-60 white pa3 fw3 h-100">
          <div className="flex justify-between">
            <h4 className="f4 mt0 fw4">{name}</h4>

            <div className="flex-shrink-0">
              {mapUrl && (
                <a
                  className="link bg-near-black grow pa1 dib h2 w2 white br2 mr2"
                  href={mapUrl}
                  title="Direcciones"
                >
                  <FaMap className="w-100 h-100" />
                </a>
              )}
              <a
                className="link bg-near-black grow pa1 dib h2 w2 white br2"
                href={websiteUrl}
                title="Sitio Web"
              >
                <FaLink className="w-100 h-100" />
              </a>
            </div>
          </div>

          <p className="ma0">{address}</p>
        </div>
      </div>
    </div>
  );
}
