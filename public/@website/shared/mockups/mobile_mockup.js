import React from 'react'


// add the another artboards form daisy
export default function MobileMockup({children}){
    return (
        <div className="mockup-phone bg-gray-4">
        <div className="camera bg-gray-4"></div> 
        <div className="display">
            <div className="artboard artboard-demo phone-1">
                {children}
            </div>
        </div>
        </div>

    )
}