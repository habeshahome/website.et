import React from 'react';
import Layout from '../shared/layouts/layouts'
import Content from '../shared/layouts/sections/content';
import {Link, Outlet } from 'react-router-dom';
  
export default function Services(props){
    return (
        <div className="w-full flex item-center justify-center mx-auto m-0 p-0">
        <Layout>
            <Content className="max-w-screen-md"> 
                <Link to="website"> Website </Link>
                <Link to="ecommerce"> Ecommerce</Link>
                <Link to="digital-marketing"> Digital Marketing</Link>
                <br/>
                {/** outlet renders page sections from react router */}
                <Outlet />
            </Content>       
        </Layout>
      </div>

        
    )
}
 