import React, { useEffect, useState } from 'react';

import photo2 from '../../images/24ae4fd2-997b-4bdc-844e-37cd8face3f8.jpg';
import photo6 from '../../images/661527b7-c283-4e63-a1fd-f31fd38bddb6.jpg';
import photo7 from '../../images/6bdbd810-2c8b-42b5-a6da-67f3532421f4.jpg';
import photo8 from '../../images/6f107822-5f09-48c0-9ef0-fd4049226fbc.jpg';
import photo9 from '../../images/73ec7966-e5b5-427e-8db1-43ff044f2f87.jpg';
import photo11 from '../../images/86350b7d-f5a8-4a11-8b1b-a6025524a9f3.jpg';
import photo15 from '../../images/8f4ce8bb-22d3-4a03-b3c1-127bf4263a1b.jpg';
import photo19 from '../../images/a1aa85d4-7247-4026-b3cb-dd565364d850.jpg';
import photo22 from '../../images/ba7ac38d-a7f6-4b99-a134-4d85ab4c477b.jpg';
import photo23 from '../../images/be984ed7-107b-4087-910b-421e1a8f73b8.jpg';
import photo24 from '../../images/cb4d18f6-f708-4838-8abb-ade2c3b1ffa1.jpg';
import photo25 from '../../images/cd0f18a8-c83f-43ad-b90a-d440281f445a.jpg';

// import photo1 from '../../images/01990b6d-6740-4e62-8273-0d9f76f30eb8.jpg';
// import photo3 from '../../images/3143b1e2-2a4c-4e44-9b1f-9f7355588b1c.jpg';
// import photo4 from '../../images/37b2c5f7-5d37-45b9-8d1c-2de7a3dc062a.jpg';
// import photo5 from '../../images/47289823-068f-4f63-8623-c7ebee444bac.jpg';
// import photo10 from '../../images/8364aaf1-e4a2-47b1-aefc-e08644096b9d.jpg';
// import photo12 from '../../images/8698ccf0-534f-48c7-b455-37555b004aac.jpg';
// import photo13 from '../../images/8b1ba9d5-8774-4fd4-b9b9-2a6a3505f627.jpg';
// import photo14 from '../../images/8ba8d9d6-03cb-46f1-93ca-3dae01c0d36b.jpg';
// import photo16 from '../../images/93497857-fcd8-4cc0-b504-7d7b155cd07b.jpg';
// import photo17 from '../../images/9380eb12-246c-4be7-b901-6c67b6f134ba.jpg';
// import photo18 from '../../images/a0fed7af-3067-433c-9f87-44bb6b4b50ff.jpg';
// import photo20 from '../../images/a42e7101-df61-498f-94ef-00975e7e19c0.jpg';
// import photo21 from '../../images/ad817e2f-5d51-4663-8668-c8ac432e47b2.jpg';
// import photo26 from '../../images/cdbe27f2-d388-4e26-8762-272071197b79.jpg';

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function SaveTheDate(): JSX.Element {
  const photos = [
    photo2,
    photo6,
    photo7,
    photo8,
    photo9,
    photo11,
    photo15,
    photo19,
    photo22,
    photo23,
    photo24,
    photo25,
  ];

  shuffleArray(photos);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = index + 1;
      if (newIndex >= photos.length) newIndex = 0;
      setIndex(newIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="pa3 flex mw8 center flex-wrap">
      <div className="flex items-center w-100 w-50-ns pa3">
        <img src={photos[index]} alt="The Couple" className="w-100" />
      </div>
      <div className="flex items-center w-100 w-50-ns pa3">
        <div className="center pa3 b--white-80 ba bw4">
          <div className="pa3 bg-white-80 fw1 avenir">
            <div className="f4">Celebra con nosotros nuestra unión</div>
            <div className="f5 mt2">
              Te esperamos el 6 de marzo del 2021 en Cuernavaca
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
