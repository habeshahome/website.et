import React from 'react'
import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content'
import Hero from '../shared/components/hero/Hero'
  
export default function Website(props){
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>
            <Content className="max-w-screen-md"> 
               <Hero 
                    title="Website Development"
                    description="Your letter is almost ready!
                    We just need a little more information."
                    cta="Start Now"
                    path="/"
               />
            </Content>       
        </Layout>
      </div>

        
    )
}
 