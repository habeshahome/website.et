import React from 'react';
import Header from './sections/header'
import Footer from './sections/footer'

const Layout =({children}) =>{
    return(
        <div>
            
            <Header />
        
            <main className=''>
                {children}
            </main>

            <div className="block bg-gray-2 "> 
                <div className="flex h-12 bg-gradient-to-t from-gray-2 to-gray-2/10"> </div>
                <Footer />
            </div>
            
        </div>
    )
}

export default Layout;