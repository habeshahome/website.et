import React from 'react';
import Layout from '../shared/layouts/layouts';
import Content from '../shared/layouts/sections/content';
import Hero from '../shared/components/hero/Hero';
  
export default function Support(props){
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>
            <Content className="max-w-screen-md"> 
                <Hero 
                    title='Support'
                    description='Get 24/7 Support'
                    cta='Need Support?'
                    path='/support' />
            </Content>       
        </Layout>
      </div>

        
    )
}
 