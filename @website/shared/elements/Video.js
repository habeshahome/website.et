import React from 'react'
import ReactPlayer from 'react-player'
import DrawingVideo from '../../assets/draw.mp4'

export default function Video(props) {
    return (
       <div className='flex justify-center mx-auto'> 
            <ReactPlayer 
                url={DrawingVideo}
                width=''
                height='400px'
                muted
                loop
                playing />          
        </div>
    )
}