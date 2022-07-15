import React from 'react';

function HeroWithBg(props) {
    const styles = {
        backgroundImage: 'url(https://api.lorem.space/image/furniture?w=1000&h=800)'
    }
    return (
        <div>
            <div className="hero min-h-screen" 
            style={styles}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content  ">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> Build Your Website, Reach More Customers</h1>
                    <p className="mb-5"> Small businesses are typically more nimble and adaptable than large businesses, making them well-suited to operating in developing countries. They also tend to have lower overhead costs, making them more profitable.
</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroWithBg;