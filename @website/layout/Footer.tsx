import React from 'react';
import Logo from './Logo'
import Social from './Social'
import ContactInfo from './contactInfo'

export default function Footer() {
    return (
            <div className="relative bottom-0 w-full h-auto pt-4 px-8 max-w-screen-lg mx-auto">
                
                {/* top Section*/}
                <div className="flex justify-between flex-col md:flex-row p-4"> 

                    <div className="md:w-1/5 font-medium pt-4 pb-4 md:h-32 text-center md:text-left"> 
                        <h1 className="text-base text-left"
                            > About <br/>
                            <span className="text-3xl font-bold">
                            Qintot Technologies <br/>
                            ቅንጦት ቴክኖሎጂ </span>
                        </h1>
                    </div>
                    
                    <div className='md:w-2/5 text-gray-3 px-4 pb-8 md:text-left'> 
                        <p> If you’re looking for a one-stop Website Design Firm to help your business 
                            or brand identity grow, you’ve come to the right place. Whatever the vision 
                            you have in mind, we’re committed to bringing it to life with superior quality 
                            and functionality.
                            
                            From the initial strategy to the final outcome. </p>
                    </div> 

                    <div className='md:w-1/5'>
                        <ContactInfo title="Get in touch"/>
                    </div>
                </div> 

                {/** Social Media & Links Section */}
                <div className="flex flex-col md:flex-row justify-between p-4"> 
                    <div className='md:w-1/5 flex flex-row justify-between pb-4'>
                         <Social />
                    </div> 
                </div>

                <div> 
                    <div>
                            
                    </div> 
                </div>


                {/** Horizontal Line */}
                <div className="relative flex pb-4 pt-12 items-center w-2/3 mx-auto p-4">
                    <div className="flex-grow border-t border-gray-3"></div>
                    <span className="flex-shrink mx-4 text-gray-3">
                        <div className='flex mx-auto h-12 mb-4'> 
                            <Logo color="coffee"/>
                        </div>
                    </span>
                    <div className="flex-grow border-t border-gray-3"></div>
                </div>

                {/* Copyright Section*/}
                <div className='text-center text-gray-4 pb-2 flex flex-col p-4'> 
                     
                    <div className=''> 
                        @Copyright All rights reserved <br/>
                        website.et by Qintot Technologies Inc
                    </div>
                </div>

                {/**Legal Links & Sitemap */}
                <div className="py-4 max-w-sm mx-auto"> 
                    <div className="flex flex-row justify-between py-4 text-gray-4 p-4">
                        <div> <a href='/tnc'> T&C</a> </div> 
                        <div> <a href='/privacy'> Privacy</a> </div>  
                        <div> <a href='/legal'> Legal </a> </div>  
                        <div> <a href='/sitemap'> Sitemap </a> </div>
                    </div> 
                </div>
            </div>
    )
}