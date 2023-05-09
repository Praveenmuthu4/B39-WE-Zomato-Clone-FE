import React, { useState } from "react";
import './LocationSearch.css'
import axios from 'axios';

export default function LocationSearch() {

// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=YOUR_API_KEY',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// const [location,setLocation] = useState([]);

// const getLocation = async()=>{
//   const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=YOUR_API_KEY`,{
// method:'GET',
// headers:{}
//   })
//  .then((res)=>{
//   return res.json();
//  })
//  .then((data)=>{
//   setLocation(data);
//  });
// }

  return (
    <div className="sc-btewqU hCSAVf">
      <div className="sc-dzOgQY sc-kIWQTW feVHGF">
        <div className="sc-jbWsrJ jYQLDQ">
          <div className="sc-hPeUyl lpeFph">
            <i className="sc-rbbb40-1 iFnyeo" color="#EF4F5F" size="14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#EF4F5F"
                width="14"
                height="14"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 kyPUnV"
              >
                <title>current-location</title>
                <path d="M13.58 10c0 1.977-1.603 3.58-3.58 3.58s-3.58-1.603-3.58-3.58c0-1.977 1.603-3.58 3.58-3.58v0c1.977 0 3.58 1.603 3.58 3.58v0zM20 9.52v0.96c0 0.265-0.215 0.48-0.48 0.48v0h-1.72c-0.447 3.584-3.256 6.393-6.802 6.836l-0.038 0.004v1.72c0 0.265-0.215 0.48-0.48 0.48v0h-0.96c-0.265 0-0.48-0.215-0.48-0.48v0-1.72c-3.575-0.455-6.375-3.262-6.816-6.802l-0.004-0.038h-1.74c-0.265 0-0.48-0.215-0.48-0.48v0-0.96c0-0.265 0.215-0.48 0.48-0.48v0h1.74c0.445-3.578 3.245-6.385 6.781-6.836l0.039-0.004v-1.72c0-0.265 0.215-0.48 0.48-0.48v0h0.96c0.265 0 0.48 0.215 0.48 0.48v0 1.72c3.584 0.447 6.393 3.256 6.836 6.802l0.004 0.038h1.72c0.265 0 0.48 0.215 0.48 0.48v0zM15.96 10c0-3.292-2.668-5.96-5.96-5.96s-5.96 2.668-5.96 5.96c0 3.292 2.668 5.96 5.96 5.96v0c3.292 0 5.96-2.668 5.96-5.96v0z"></path>
              </svg>
            </i>
          </div>
          <a color="#EF4F5F" className="sc-1hez2tp-0 sc-RWGNv bpydAI" href="/location">
            Detect current location
          </a>
        </div>
        <p className="sc-1hez2tp-0 sc-dTsoBL etwCuM">Using GPS</p>
      </div>
    </div>
  );
}
