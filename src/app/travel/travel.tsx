import React from 'react';
import recommendations from '../../images/recommendations.jpg';
import Hotel from './hotel';

export default function RSVP(): JSX.Element {
  return (
    <div>
      <div className="mw8 w-100 center mt4 flex">
        <div className="ma3">
          <div className="flex flex-wrap items-stretch justify-between">
            <Hotel
              address="Del Panteón, Los Olivos, 62790 Alpuyeca, Morelos, Mexico"
              imageUrl="https://www.hotelboutiqueeltulipan.com/wp-content/uploads/2020/02/DSC_0104_Fotor-1120x561-1.jpg"
              mapUrl="https://www.google.com/maps?ll=18.733529,-99.25899&z=17&t=m&hl=en&gl=NL&mapclient=embed&cid=9044812155522868591"
              name="El Tulipán"
              websiteUrl="https://www.hotelboutiqueeltulipan.com/"
            />
            <Hotel
              address="Entre Camino Real a Coatetelco y Calle las Palmas Norte, S/N, Alpuyeca, Morelos, México"
              imageUrl="https://static.wixstatic.com/media/a84de7_e0ce200e29e5409397af255608d4cae8~mv2.jpeg/v1/fill/w_960,h_499,al_c,q_85,usm_0.66_1.00_0.01/a84de7_e0ce200e29e5409397af255608d4cae8~mv2.webp"
              mapUrl="https://www.google.com/maps/place/Casa+de+las+Luci%C3%A9rnagas/@18.7402464,-99.2648623,17z/data=!3m1!4b1!4m8!3m7!1s0x85cdd7393aba8ccf:0xcbb5f61048720d72!5m2!4m1!1i2!8m2!3d18.7402413!4d-99.2626736?hl=en"
              name="Casa de las Luciérnagas"
              websiteUrl="https://www.casadelasluciernagas.com"
            />
            <Hotel
              address="Tetecala de las Reformas, Morelos"
              imageUrl="https://a0.muscache.com/im/pictures/55b0a4f4-9371-446c-86e4-8df3943a3c3a.jpg?im_w=720"
              name="Preciosa Quinta para descanso (AirBnB)"
              websiteUrl="https://www.airbnb.mx/rooms/31310318?adults=4&check_in=2021-03-05&check_out=2021-03-07&source_impression_id=p3_1609697351_VSzvXtX54SJ1DeWn&guests=1"
            />
            <Hotel
              address="Alpuyeca, Morelos"
              imageUrl="https://a0.muscache.com/im/pictures/93f11be0-7c0c-4a3d-99dc-8762093a8214.jpg?im_w=720"
              name="Paraiso de aislamiento, descanso y home office (AirBnB)"
              websiteUrl="https://www.airbnb.mx/rooms/43337247?adults=4&check_in=2021-03-05&check_out=2021-03-07&source_impression_id=p3_1609697362_qtlf%2B4tRw%2BlSwl7W&guests=1"
            />
            <Hotel
              address="Tetecala de las Reformas, Morelos"
              imageUrl="https://a0.muscache.com/im/pictures/65377827/82a9cef3_original.jpg?im_w=720"
              name="Beautiful vacation home in Morelos (AirBnB)"
              websiteUrl="https://www.airbnb.mx/rooms/5221264?adults=4&check_in=2021-03-05&check_out=2021-03-07&source_impression_id=p3_1609697288_bnkJG0p1zhD%2Fia3I"
            />
            <Hotel
              address="Blvd. Tequesquitengo S/N Frente a Glorieta Las Alas, San José Vista Hermosa, Tequesquitengo, Morelos"
              mapUrl="https://www.google.com/maps/place/Excelaris+Grand+Resort+Conventions+%26+Spa/@18.7306957,-99.4503837,12z/data=!4m15!1m9!2m8!1sHotels!3m6!1sHotels!2sSanta+Cruz+Vista+Alegre,+Morelos,+Mexico!3s0x85cdcfc4eda94af3:0xb52276df3e66a289!4m2!1d-99.3816666!2d18.7297222!3m4!1s0x85cdd4710be8a563:0x8159f25f751da114!5m2!4m1!1i2?hl=es"
              imageUrl="https://www.excelarisplaza.com/img/slider/004.jpg"
              name="Excelaris"
              websiteUrl="https://www.excelarisplaza.com/"
            />
          </div>
          <a
            target="_blank"
            className="w-100 db pa2"
            rel="noreferrer"
            href="https://www.google.com/maps/search/Hotels/@18.7283187,-99.4489053,12z/data=!3m1!4b1!4m12!2m11!3m6!1sHotels!2sHacienda+Santa+Cruz+Vista+Alegre,+Morelos!3s0x85cdcfc5372c05ed:0x840dfcdb0f399c11!4m2!1d-99.3788653!2d18.728159!5m3!5m2!4m1!1i2"
          >
            <img
              className="w-100"
              src={recommendations}
              alt="Recomendaciones"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
