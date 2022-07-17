import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import { your } from '../.next/static/chunks/pages/_app';
import Link from 'next/link'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Home: NextPage = () => {
 

  return (
    <div className={styles.container}>
      <Head>
        <title>website.et</title>
        <meta name="description" content="website.et by Qintot Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      
        <div className='text-gray-600'> 
          <h1 className="text-5xl md:text-7xl font-bold"> BUSINESS</h1>
          <p className="text-5xl md:text-7xl font-thin md:tracking-wide"> IN ACTION</p>
        </div>
        
        <div className='w-[500px] h-[500px]'> 
            
           <Radar 
              className='mt-6'
              data={ {
              labels: ["Africa", "Europe", "Australia", "Latin America", "North America", "Middle East"],
              datasets: [{
                label: 'Number Internet Users (in millions)',
                data: [602, 747, 30, 534, 347, 206],
                backgroundColor: [
                  'rgba(23, 33, 33, 0.2)',
                  'rgba(54, 162, 33, 0.2)',
                  'rgba(33, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(33, 102, 33, 0.2)',
                  'rgba(33, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 6
              }],
              }
           } />
        </div>

        
        <div className="mt-12"> 
          <div className='px-6 py-4 rounded bg-gray-300 shadow-md text-gray-900 hover:ring-1'> 
            Download Free Guide
          </div>
        </div> 
      </main>

      <footer className={styles.footer}>
      <div className="btm-nav w-full flex flex-row justify-between sm:hidden">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </button>
      <button className="active">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      </button>
    </div>
      </footer>
    </div>
  )
}

export default Home

/**
 * 
 <img  className="mask mask-diamond bg-grey-400" 
              src="assets/logo.svg" 
              alt=""
              width="400" 
              height="400"/>
 */