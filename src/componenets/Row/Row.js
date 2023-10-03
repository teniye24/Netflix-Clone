import React, { useState, useEffect } from "react";
import "./Row.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import axios from "../../axios";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // useEffect(() => {
  //   const getBlogPost = async () => {
  //     try {
  //       const res = await fetch("http://localhost:4444/getBlogPost");
  //       const getResponse = await res.json();
  //       console.log(getResponse);
  //       setBlogPosts(getResponse);
  //     } catch (error) {
  //       console.log("An error occured");
  //       console.log(error);
  //     }
  //   };
  //   getBlogPost();
  // }, []);
  console.log(movies);
   const opts = {
     height: "390",
     width: "100%",
     playerVars: {
       autoplay: 1,
     },
   };
  //  console.log(movies);
    const handleClick = (movie) => {
      if (trailerURL) {
        setTrailerURL("");
      } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerURL(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
