import React from 'react';
//import Logo from '../../shared/common/Logo'
import Hero from '../@website/shared/components/hero/Hero'
import { useState, useEffect } from "react";
import axios from "axios";


const PageNotFound = () => {
   /*
        navigator.geolocation.getCurrentPosition(function(position) {
            //console.log("Latitude is :", position.coords.latitude);
            //console.log("Longitude is :", position.coords.longitude);
          });
          
        const [state, setState] = useState({
            ip: "",
            countryName: "",
            countryCode: "",
            city: "",
            timezone: ""
          });
        
          const getGeoInfo = () => {
            axios
              .get("https://ipapi.co/json/")
              .then((response) => {
                let data = response.data;
                setState({
                  ...state,
                  ip: data.ip,
                  continentCode: data.continent_code,
                  countryName: data.country_name,
                  countryCapital: data.country_capital,
                  countryCode: data.country_calling_code,
                  city: data.city,
                  timezone: data.timezone,
                  countryPopulation: data.country_population,
                  operator: data.org,
                  currency: data.currency,
                  currencyName: data.currency_name,
                });
              })
              .catch((error) => {
                //(error);
              });
          };
        
          useEffect(() => {
            getGeoInfo();
          }, []);

*/
    return (
        <React.Fragment> 
            
            <Hero 
            title="Page not found"
            description="The page you are trying to access is not available on this server"
            cta='Return to homepage'
            path='/' > 

      
            
            </Hero>

           
        </React.Fragment>
         
    )
}

export default PageNotFound;

/* 
      <div className='text-xs text-gray-3 bg-gray-1'>
                <p>IP: {state.ip}</p>
                <p>Country Name: {state.countryName}</p>
                <p>Country Code: {state.countryCode}</p>
                <p>City: {state.city}</p>
                <p>Timezone: {state.timezone}</p>
                <p> Continent: {state.continentCode} </p>
            </div>
*/