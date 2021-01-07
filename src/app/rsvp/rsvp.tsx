import React from 'react';
import WhatsApp from '../../images/WhatsApp.png';

export default function RSVP(): JSX.Element {
  const url = new URL('https://wa.me/525610885831');

  url.searchParams.set(
    'text',
    'Hola, \n\nQuiero confirmar mi asistencia a la boda de Paola González y Rodrigo Pineda, el 6 de marzo, 2021. Mi nombre completo es:\n',
  );
  return (
    <div>
      <div className="mw6 w-100 center bg-white mt4 flex">
        <div className="ma3">
          <h3>Ceremonia y Recepción</h3>
          <div className="flex">
            <div></div>
          </div>
          <div>
            Confirma tu asistencia antes del 13 de febrero con Zuri de Garza
          </div>
          <a className="link dim blue db pa3" href={url.href}>
            <div className="flex items-center">
              <div>
                <img className="w2" src={WhatsApp} alt="WhatsApp" />
              </div>
              <div>+52 56 1088 5831</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
