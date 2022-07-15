import React from 'react';
import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content';

import Hero from '../shared/components/hero/Hero'
import PricingCard from '../shared/components/cards/PricingCard' 
import { useState, useEffect } from "react";
import axios from "axios";

export default function Pricing(props){

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
            //console.log(error);
          });
      };
    
      useEffect(() => {
        getGeoInfo();
      }, []);

    return (
      <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
      <Layout>
          <Content className="max-w-screen-md"> 
          <div className="bg-base-200 min-h-[25vh] text-center font-bold font-ubuntu tracking-wider pt-2 flex items-center justify-center"> 
            <h2 className=""> Pricing </h2>
          </div>


           <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-base-200"> 
            <PricingCard 
              title="Online Shop"
              tagline="Get your ecomerce site & Start Selling Online"
              pricingTitle="Starting from"
              price="10,000 ETB"
              period="Year" 
              includedItems= {['Website Design', 'Graphics', 'Logo Design']}
              cta="Create you store"
              />

            <PricingCard 
            title="Performance Marketing"
            tagline="Pay for Results Only!"
            cta="Start Now"/>

            <PricingCard 
            title="Mobile Applications"
            tagline="Get a Mobile App and Connect with Your Customers"
            cta="Get a Quote"/>

            <PricingCard 
            title="IT Consulting"
            tagline="Make wise business decisions for your business."
            cta="Submit RFP"/>

          </div>
          </Content>       
      </Layout>
    </div>
    )
}
 