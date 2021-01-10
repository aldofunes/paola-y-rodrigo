import React from 'react';
import {
  google,
  outlook,
  office365,
  yahoo,
  ics,
  CalendarEvent,
} from 'calendar-link';
import image from '../../images/hacienda-santa-cruz-vista-alegre-locaciones-optimized.jpg';
import WhatsApp from '../../images/WhatsApp.png';
import dressCode from '../../images/dress-code-2.jpg';
import accessories from '../../images/accessories.jpg';
import styles from './events.module.css';

export default function Events(): JSX.Element {
  const event: CalendarEvent = {
    title: 'Boda Paola y Rodrigo',
    description: '¡Te esperamos para celebrar nuestra unión!',
    start: '2021-03-06T15:30:00-06:00',
    end: '2021-03-07T03:00:00-06:00',
    // duration: [3, 'hour'],
    location: 'Hacienda Santa Cruz Vista Alegre, Mazatepec, Morelos',
    busy: true,
    url: 'https://www.paolayrodrigo.com',
  };

  const rsvpUrl = new URL('https://wa.me/525610885831');

  rsvpUrl.searchParams.set(
    'text',
    'Hola, \n\nQuiero confirmar mi asistencia a la boda de Paola González y Rodrigo Pineda, el 6 de marzo, 2021. Mi nombre completo es:\n',
  );

  return (
    <div className="mw8 w-100 center bg-white-80 mt4 flex flex-wrap flex-nowrap-l">
      <div className="w-100 w-50-l tc pa3">
        <h1 className="f2 fw4 serif" style={{ color: '#5E6737' }}>
          Ceremonia y Recepción
        </h1>
        <div className="f5 fw3 mt4">Sábado</div>
        <div className="f2 fw3">6 de marzo</div>
        <div className="f5 fw3">2021</div>

        <div className="b--gray bt bb pv2 mv3">15:30 hrs</div>

        <div className={`pa3 relative ${styles.dropdown}`}>
          📅 Agrégalo a tu calendario
          <div
            className={`dn absolute z-1 bg-white mt2 ${styles.dropdownContent}`}
          >
            <a
              className="db pa2 link dark-gray hover-bg-light-gray"
              href={google(event)}
            >
              Google
            </a>
            <a
              className="db pa2 link dark-gray hover-bg-light-gray"
              href={outlook(event)}
            >
              Outlook
            </a>
            <a
              className="db pa2 link dark-gray hover-bg-light-gray"
              href={office365(event)}
            >
              Office 365
            </a>
            <a
              className="db pa2 link dark-gray hover-bg-light-gray"
              href={yahoo(event)}
            >
              Yahoo
            </a>
            <a
              className="db pa2 link dark-gray hover-bg-light-gray"
              href={ics(event)}
            >
              Apple
            </a>
          </div>
        </div>

        <div className="mv4 dib w-100">
          <a
            className="pv2 ba dim link dark-gray flex items-center justify-center"
            style={{ borderColor: '#128C7E' }}
            href={rsvpUrl.href}
          >
            <img className="w2 mr2 db" src={WhatsApp} alt="WhatsApp" />
            <div className="f4 mt1" style={{ color: '#128C7E' }}>
              RSVP
            </div>
          </a>
        </div>

        <div className="mv4 dib w-100">
          <img className="w-100 mw6 center" src={dressCode} />
          <img className="w5 center" src={accessories} />
          <div className="flex justify-around">
            <div className="f5">
              <div className="f3" style={{ color: '#5E6737' }}>
                Hombres
              </div>
              <div>Casual</div>
              <div>Guayabera</div>
              <div>Telas Ligeras</div>
              <div>Colores Claros</div>
            </div>
            <div className="f5 ">
              <div className="f3" style={{ color: '#5E6737' }}>
                Mujeres
              </div>
              <div>Vestido largo</div>
              <div>Telas Ligeras</div>
              <div>Colores Claros</div>
              <div>Estampados</div>
              <div>Tacón grueso</div>
              <div>No blanco</div>
              <div>No verde olivo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 w-50-l pa3">
        <div>
          <img
            src={image}
            alt="Hacienda Santa Cruz Vista Alegre"
            className="w-100"
          />
        </div>

        <div className="mv4 dib w-100">
          <strong>Hacienda Santa Cruz Vista Alegre</strong>
          <br />
          Carretera Alpuyeca – Grutas de Cacahuamilpa Km 22.5, Mazatepec,
          Morelos <br />
          <a
            className="dim link dark-gray pv2 pa3 ba mt2 dib"
            href="https://goo.gl/maps/8uaiUGptS7G5sdvAA"
          >
            📍 Mapa
          </a>
        </div>

        <div>
          <p className="lh-copy">
            Desde la ciudad de México por la Autopista del Sol, cruzar
            Cuernavaca con rumbo a Acapulco, pasando el parque acuático Baraka
            (situado del lado izquierdo de la carretera) y la salida del club de
            golf Santa Fe, tomar la siguiente salida del lado derecho que indica
            Jojutla de Juárez, Coatlan del Río, Balnearios. Pasando la caseta de
            peaje seguir derecho hasta topar y dar vuelta a la izquierda,
            posteriormente seguir indicaciones de Alpuyeca, Xochicalco,
            Mazatepec, Grutas de Cacahuamilpa.
          </p>

          <p className="lh-copy">
            La Hacienda se encuentra en el MUNICIPIO DE MAZATEPEC (Km 22.5 de la
            carretera Alpuyeca – Grutas de Cacahuamilpa).
          </p>

          <p className="lh-copy">
            Al dejar la ¨Autopista del Sol¨, se cruzan los poblados de Alpuyeca,
            El Rodeo (con su laguna del lado izquierdo), Miacatlán y Mazatepec.
            Al cruzar este último y aproximadamente a 2 km se distingue el
            ¨Chacuaco¨( chimenea) de la Hacienda a la izquierda de la carretera.
          </p>
        </div>
      </div>
    </div>
  );
}
