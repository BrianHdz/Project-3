import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

export class Provider extends Component {
    state = {
        video_list: [],
        heading: 'Top 10 Videos'
    };

    componentDidMount() {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=us&type=video&chart=mostPopular&maxResults=10&key=`)
            .then(res => {
                console.log(res.data)
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