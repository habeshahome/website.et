import React from 'react';
import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content';
import Hero from '../shared/components/hero/Hero'
  
export default function Learn(props){
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>
            <Content className="max-w-screen-md"> 
                <Hero 
                    title="Learn Business & Technology" 
                    description="Qintot University is Here to Help You Achieve Your Business Goals."
                    cta="Enroll Now"
                    path="/" />
            </Content>       
        </Layout>
      </div>

        
    )
}
 