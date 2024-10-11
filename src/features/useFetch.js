import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results?data.results:data);
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getMovie();
  }, [url]);
  return movie;
};

export default useFetch;
