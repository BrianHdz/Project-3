import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

const Video = (props) => {
    const { video } = props;
    console.log(video);
    return (
        <div className='col-md-6'>
            <div className='card mb-4 shadow-sm'>
                <Iframe width='550' height='315' src={`http://www.youtube.com/embed/${video.videoId} `} frameBorder='0' allowFullScreen />

                <Link to={`homepage/videos/${video.videoId}`} className='btn btn-dark btn-block'>
                    Save this Video to your homepage
                </Link>
            </div>
        </div>
    )
}

export default Video;