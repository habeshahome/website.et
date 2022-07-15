import React from 'react';
import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content';

  
export default function About(props){
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>
            <Content className="max-w-screen-md"> 
                <h1> About us Page  </h1>
            </Content>       
        </Layout>
      </div>

        
    )
}
 