import React from 'react';
import { photo40 } from '../../images/photos';

export default function SaveTheDate(): JSX.Element {
  return (
    <div className="pa3 flex mw8 center flex-wrap">
      <div className="flex items-center w-100 w-50-ns pa3">
        <img src={photo40} alt="The Couple" className="w-100" />
      </div>
      <div className="flex items-center w-100 w-50-ns pa3">
        <div className="center pa3 b--white-80 ba bw4">
          <div className="pa3 bg-white-80 fw1 avenir">
            <div className="f4 fw5" style={{ color: '#5E6737' }}>
              Celebra con nosotros nuestra unión
            </div>
            <div className="f5 mt2">
              Después de un largo periodo de planeación, queremos compartirte la
              fecha de nuestra boda. El 6 de Marzo del 2021 comenzaremos a
              escribir oficialmente la historia de la familia Pineda Gonzalez y
              ésta celebración no será lo mismo sin ti. Eres parte fundamental
              de nuestra historia.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
