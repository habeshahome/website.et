import React from 'react';
import Primary from '../components/buttons/Primary'
import Video from '../elements/Video'
import Stats from './stats'
import MockupCode from '../mockups/mockup_code';
import Logo from '../common/Logo'

import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Website Development",
    "Digital Marketing",
    "Mobile Applications",
    "Performance Marketing",
  ];
/** 
 * default The default.
gentle
wobbly
stiff
slow
molasses
 */
export default function FrontBanner(props) {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return (
        <div 
            className="bg-gray-1 md:bg-gray-0 text-gray-4 flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto"> 

            <div className="md:w-2/5 h-screen "> 
                <div className="block mx-auto text-gray-3 text-center pt-4"> 
                    <p className=''> Proudly Ethiopian </p>                    
                </div> 
                
                <div 
                className='font-ubuntu px-4 text-5xl text-shadow text-center text-gray-4 flex flex-col justify-center w-full' >
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.gentle }
                        className="mx-auto w-full"
                    />
                </div> 

                <div> 
                    Build your business website in 3 easy steps.
                    Select your website type & upload your content. and publish 
                    all website are responsive & fit on any mobile device. 
                </div>
                
                <div className="flex justify-center items-center pt-8 pb-32"> 
                    <Primary 
                        title="Start now"
                        />
                </div>
            </div>

            <div className='md:w-3/5  bg-gray-0 text-gray-4 mx-auto'>
                <div className="block"> 
                <Video />
                </div> 
                <div className='w-full md:w-2/3 xl:w-full flex flex-col mx-auto justify-center bg-gray-1 md:rounded'>
                    <div className="p-4"> 
                        <h1 className='text-4xl text-center font-bold text-gray-3 font-qintot'> Market Insights </h1>
                    </div> 
                    <Stats />
                </div>
            </div>
            
        </div>
    )
}