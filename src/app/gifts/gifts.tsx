import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import AccountDetail from './account-detail';

export default function RSVP(): JSX.Element {
  return (
    <div>
      <div className="mw6 w-100 center bg-white mt4">
        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50497129"
          className="pv3 ph4 link dark-gray grow flex justify-between w-100 items-center"
        >
          <div>
            <h3>Liverpool</h3>
            <p>
              Para aquellos que quieran ayudarnos a llenar nuestra casa, les
              compartimos nuestra mesa de regalos de Liverpool.
            </p>
            <p>Registrado como &ldquo;Boda Pao y Ro&rdquo;</p>
            <p>
              Número de evento: <b>5049 7129</b>
            </p>
          </div>
          <div>
            <FaChevronRight className="w2 h-auto" />
          </div>
        </a>
        <hr className="bn bg-black-30" style={{ height: '1px' }} />
        <div className="pv3 ph4">
          <h3 className="ma0">BBVA</h3>
          <p>
            Por otro lado, abrimos una cuenta de BBVA para aquellos que
            prefieran ayudarnos con los gastos de nuestra soñada Luna de Miel en
            Japón.
          </p>
          <h4>ありがとう!</h4>
          <AccountDetail
            label="Número de cuenta"
            text="047 605 9333"
            rawText="0476059333"
          />
          <AccountDetail
            label="Cuenta CLABE"
            text="012 180 0047 6059 3334"
            rawText="012180004760593334"
          />
          <AccountDetail
            label="Tarjeta de débito"
            text="4152 3137 1996 6769"
            rawText="4152313719966769"
          />
          <AccountDetail
            label="Código SWIFT"
            text="BCMRMXMMPYM"
            rawText="BCMRMXMMPYM"
          />
        </div>
      </div>
    </div>
  );
}
