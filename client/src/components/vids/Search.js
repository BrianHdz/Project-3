import React, { Component } from "react";
import axios from "axios";
import "./search.css";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    videoTitle: "",
    duration: "any",
    resultsOrder: "relevance",
    definition: "any",
    safeSearch: "none",
  };

  findVideo = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?&key=${process.env.REACT_APP_YT_KEY}&part=snippet&type=video&maxResults=10&q=${this.state.videoTitle}&videoDuration=${this.state.duration}&order=${this.state.resultsOrder}&videoDefinition=${this.state.definition}&safeSearch=${this.state.safeSearch}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_VIDEOS",
          payload: res.data.items,
        });
        this.setState({
          videoTitle: "",
          duration: "any",
          resultsOrder: "relevance",
          definition: "any",
          safeSearch: "none",
        });
      })
      .catch((err) => console.log(err));
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4 mt-4">
              <h1 className="display-4 text-center">Search For A Video</h1>
              <form onSubmit={this.findVideo.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Video title..."
                    name="videoTitle"
                    value={this.state.videoTitle}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-inline mb-3">
                  <label
                    htmlFor="resultsOrder"
                    className="control-label mr-2 h6"
                  >
                    Results Order:
                  </label>
                  <div>
                    <select
                      className="form-control mr-4"
                      id="resultsOrder"
                      name="resultsOrder"
                      value={this.state.resultsOrder}
                      onChange={this.onChange}
                    >
                      <option value="relevance">Relevance</option>
                      <option value="rating">Rating</option>
                      <option value="date">Date</option>
                      <option value="title">Title</option>
                      <option value="viewCount">View Count</option>
                    </select>
                  </div>
                  <label htmlFor="safeSearch" className="control-label mr-2 h6">
                    Safe Search:
                  </label>
                  <div>
                    <select
                      className="form-control mr-4"
                      id="safeSearch"
                      name="safeSearch"
                      value={this.state.safeSearch}
                      onChange={this.onChange}
                    >
                      <option value="none">None</option>
                      <option value="moderate">Moderate</option>
                      <option value="strict">Strict</option>
                    </select>
                  </div>
                  <label htmlFor="definition" className="control-label mr-2 h6">
                    Video Definition:
                  </label>
                  <div>
                    <select
                      className="form-control mr-4"
                      id="definition"
                      name="definition"
                      value={this.state.definition}
                      onChange={this.onChange}
                    >
                      <option value="any">Any</option>
                      <option value="high">High</option>
                      <option value="standard">Standard</option>
                    </select>
                  </div>
                  <label htmlFor="duration" className="control-label mr-2 h6">
                    Video Duration:
                  </label>
                  <div>
                    <select
                      className="form-control"
                      id="duration"
                      name="duration"
                      defaultValue={this.state.duration}
                      onChange={this.onChange}
                    >
                      <option value="any">Any</option>
                      <option value="long">Long</option>
                      <option value="medium">Medium</option>
                      <option value="short">Short</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn search-btn search-btn3 btn-lg btn-block mb-5"
                >
                  Search For Video
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
