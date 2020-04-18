import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../YTlayout/Spinner';
import Video from '../vids/Video';

class Videos extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { video_list, heading } = value;
                    if (video_list === undefined || video_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <React.Fragment>
                                <h3 className='text-center mb-4'>{heading}</h3>
                                <div className='row'>
                                    {video_list.map(item => (
                                        <Video key={item.id.videoId} video={item.id} />
                                    )
                                    )}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Videos;