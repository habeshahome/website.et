import React from 'react'

import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content';

import Hero from '../shared/components/hero/Hero'
import HeroWithFigure from '../shared/components/hero/HeroWithFigure'
import HeroWithBg from '../shared/components/hero/HeroWithBg'; 
import HeroCard from '../shared/components/hero/HeroCard';
 
const Home = () => {
   
    // Simplifying auto-navigation 
    /**
     *  navigate('/path')
     *  navigate(-1)   to go back
     *  navigate('/path', {replace: true})  - to clear history or block going back
     */
    //const navigate = useNavigate();
 
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>

            <Content className="max-w-screen-md"> 
                
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div> 
                        <Hero 
                        title="Let's get you started"
                        description="Your guide towards building your profitable business. "
                        cta="Get Started"
                        path="/form" />
                    </div>
                    <div> 
                        <HeroWithFigure className="" 
                            title="How to use this site"
                            description="Follow the inistructions"
                            cta="Start Now"
                            path="web-order"/>  
                    </div>
                    <div> 
                        <HeroCard 
                            title="Let's get you started"
                            description="Your guide towards building your profitable business. "
                            cta="Get Started"
                            path="/form" />
                    </div>
                    <div> The Fourth </div>
                    <div> The Fifth </div>
                </div>
               

            </Content> 
         </Layout>
      </div>

        
    )
}
export default Home;

/**

 <HeroWithBg className="" />
                
               <Hero 
               title="Let's get you started"
               description="Your guide towards building your profitable business. "
               cta="Get Started"
               path="/form" />

                <HeroWithFigure className="" 
                title="How to use this site"
                description="Follow the inistructions"
                cta="Start Now"
                path="web-order"/>

 */