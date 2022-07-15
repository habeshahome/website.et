import React from 'react'

const ContactInfo = (props) => {
    return (
        <React.Fragment>
            <div className="flex flex-col text-left text-gray-4 pb-8 "> 
                <div className="flex py-1">
                    <h4 className="font-medium"> {props.title} </h4>
                </div> 
                <div className='flex'> 
                    <ul className="px-2">
                        <li> <a href="mailto:qintot@gmail.com"> Send us Email </a></li>
                        <li> <a href='tel:00971567220073'> Call Dubai, UAE </a></li>
                        <li> <a href='tel:00971567220073'> Call Addis Ababa, Ethiopia </a></li>
                        <li> <a href="maps.google.com"> Visit Headoffice in Dubai, UAE </a></li>
                    </ul>   
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContactInfo;