import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useFetch from "../../../features/useFetch";
import "./Movie.css";
import CardMovie from "../../Global/CardMovie/CardMovie";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { slug: keySearch } = useParams();
  console.log(keySearch);
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const [page, setPage] = useState(1);
  const [allMovie, setAllMovie] = useState([]);
  const listmovie = useFetch(
    keySearch
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=1`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
  );

  useEffect(() => {
    setAllMovie([...allMovie, ...listmovie]);
  }, [listmovie]);

  return (
    <div>
      <Container>
        <div className="headline">
          <h3>ONLINE STREAMING</h3>
          <h2>List Movies</h2>
        </div>
        <Row>
          {allMovie.map((item) => (
            <Col lg={3}>
              <div key={item.id}>
                <CardMovie
                  id={item.id}
                  title={item.original_title}
                  date={item.date}
                  grade={item.vote_average}
                  img={item.poster_path}
                ></CardMovie>
              </div>
            </Col>
          ))}
        </Row>
        <button onClick={() => setPage(page + 1)}>Show more</button>
      </Container>
    </div>
  );
};

export default Movie;
