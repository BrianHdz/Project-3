import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    state = {
        videoTitle: ''
    };

    findVideo = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://www.googleapis.com/youtube/v3/search?&key=${process.env.REACT_APP_YT_KEY}&part=snippet&type=video&maxResults=10&q=${this.state.videoTitle}`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: 'SEARCH_VIDEOS',
                    payload: res.data.items
                });
                this.setState({ videoTitle: '' })
            })
            .catch(err => console.log(err));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card card-body mb-4 p-4'>
                            <h1 className='display-4 text-center'>
                                Search For A Video
                        </h1>
                            <form onSubmit={this.findVideo.bind(this, dispatch)}>
                                <div className='form-group'>
                                    <input type='text' className='form-control form-control-lg' placeholder='Video title...' name='videoTitle'
                                        value={this.state.videoTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type='submit' className='btn btn-primary btn-lg btn-block mb-5'>Search For Video</button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;