import React from 'react';
import WhatsApp from '../../images/WhatsApp.png';

export default function RSVP(): JSX.Element {
  const url = new URL('https://wa.me/525610885831');

  url.searchParams.set(
    'text',
    'Hola, \n\nQuiero confirmar mi asistencia a la boda de Paola González y Rodrigo Pineda, el 27 de noviembre, 2021. Mi nombre completo es:\n',
  );
  return (
    <div className="mw6 w-100 center bg-white mt4 flex">
      <div className="ma3">
        <h3>Ceremonia y Recepción</h3>
        <div className="flex">
          <div></div>
        </div>
        <div>
          Confirma tu asistencia antes del 6 de noviembre con Zuri de Garza (sin
          niños)
        </div>

        <a className="link dim blue db pa3" href={url.href}>
          <div className="flex items-center justify-center">
            <div className="mr2">
              <img className="w2" src={WhatsApp} alt="WhatsApp" />
            </div>
            <div>+52 56 1088 5831</div>
          </div>
        </a>

        <p>
          <b>*</b> Estamos en situación de pandemia. En caso de asistir al
          evento, te pedimos guardes cuidados y extremes precauciones durante el
          mes de Febrero y de manera más intensa 10 días antes del evento. Si
          presentas algún síntoma, por favor sé responsable y no asistas. Te
          extrañaremos, pero podremos celebrar más adelante.
        </p>
      </div>
    </div>
  );
}
