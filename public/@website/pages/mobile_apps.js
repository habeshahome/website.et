import React from 'react';
import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content';
import Hero from '../shared/components/hero/Hero'
  
export default function MobileApps(props){
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>
            <Content className="max-w-screen-md"> 
                <Hero 
                        title="Mobile Applications"
                        description="Android & iOS apps"
                        cta="Start Mobile App Project"
                        path="/"
                    />
            </Content>       
        </Layout>
      </div>

        
    )
}
 