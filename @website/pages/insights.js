import React from 'react';
import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content';

  
export default function Insights(props){
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>
            <Content className="max-w-screen-md"> 
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Qintot Technologies</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            </Content>       
        </Layout>
      </div>

        
    )
}
 