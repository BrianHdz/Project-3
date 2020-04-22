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
                                <div className="form-inline mb-3">
                                    <label for="channelType" className="control-label mr-1 h6" name='channelType'>Channel Type:</label>
                                    <div>
                                        <select className="form-control mr-1" id="channelType">
                                            <option>Any</option>
                                            <option>Show</option>
                                        </select>
                                    </div>
                                    <label for='resultsOrder' className="control-label mr-1 h6" name='resultsOrder'>Results Order:</label>
                                    <div>
                                        <select className="form-control mr-1" id='resultsOrder'>
                                            <option>Date</option>
                                            <option>Rating</option>
                                            <option>Relevance</option>
                                            <option>Title</option>
                                            <option>View Count</option>
                                        </select>
                                    </div>
                                    <label for='safeSearch' className="control-label mr-1 h6" name='safeSearch'>Safe Search:</label>
                                    <div>
                                        <select className="form-control mr-1" id='safeSearch'>
                                            <option>None</option>
                                            <option>Moderate</option>
                                            <option>Strict</option>
                                        </select>
                                    </div>
                                    <label for='definition' className="control-label mr-1 h6" name='definition'>Definition:</label>
                                    <div>
                                        <select className="form-control mr-1" id='definition'>
                                            <option>Any</option>
                                            <option>High</option>
                                            <option>Standard</option>
                                        </select>
                                    </div>
                                    <label for='duration' className="control-label mr-1 h6" name='duration'>Duration:</label>
                                    <div>
                                        <select className="form-control mr-1" id='duration'>
                                            <option>Any</option>
                                            <option>Long</option>
                                            <option>Medium</option>
                                            <option>Short</option>
                                        </select>
                                    </div>
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