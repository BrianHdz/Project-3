import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_VIDEOS':
            return {
                ...state,
                video_list: action.payload,
                heading: 'Search Results'
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        video_list: [],
        heading: 'Top 10 Videos',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=us&type=video&chart=mostPopular&maxResults=10&key=${process.env.REACT_APP_YT_KEY}`)
            .then(res => {
                this.setState({ video_list: res.data.items })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;