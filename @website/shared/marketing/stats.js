import React from 'react'

export default function Stats(props) {
    return (
        <div className="w-full md:px-4 flex flex-col xl:flex-row justify-between mx-auto">
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 strokeCurrent"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title">in 2021</div>
                <div className="stat-value text-secondary">2.14B</div>
                <div className="stat-desc">Digital Buyers in the World</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 strokeCurrent"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title">Online Presence</div>
                <div className="stat-value text-primary">81%</div>
                <div className="stat-desc">of customers search products online</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                    <img 
                    src="https://api.lorem.space/image/face?w=128&h=128" 
                    alt="Q"/>
                    </div>
                </div>
                </div>
                <div className="stat-value">29.8m</div>
                <div className="stat-title">Internet Users</div>
                <div className="stat-desc text-secondary">in Ethiopia</div>
            </div>
            
        </div>
    )
}