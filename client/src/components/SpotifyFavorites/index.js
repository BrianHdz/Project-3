import React, { useEffect, useState } from "react";
import API from "../../utils/api";
import Row from "../Row";
import Col from "../Col";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";

function SpotifyFavorites() {
  const [spotifyFavs, setSpotifyFavs] = useState([]);

  useEffect(() => {
    loadSpotifyFavs();
  }, []);

  function loadSpotifyFavs() {
    API.getSpotifyFavs()
      .then((res) => setSpotifyFavs(res.data))
      .catch((err) => console.log(err));
  }

  function deleteSpotifyFav(id) {
    API.deleteSpotifyFav(id)
      .then((res) => loadSpotifyFavs())
      .catch((err) => console.log(err));
  }

  function setSpotifyPlayerURI(key) {}

  return (
    <div className="container">
      {spotifyFavs.length ? (
        <List>
          {spotifyFavs.map((spotifyFav) => {
            return (
              <ListItem key={spotifyFav._id}>
                {/* <strong>{spotifyFav.name}</strong> */}
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${spotifyFav.uri}`}
                  width="305"
                  height="200"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
                <DeleteBtn onClick={() => deleteSpotifyFav(spotifyFav._id)} />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <h3 className="text-light bg-dark text-center">
          Save some Favs on the Spotify Page!
        </h3>
      )}
    </div>
  );
}

export default SpotifyFavorites;
