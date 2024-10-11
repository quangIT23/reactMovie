import React from "react";
import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../../features/useFetch";

const Detail = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const trailerMovie = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`
  );
  const findTrailer = trailerMovie.find((item) => item.type === "Trailer");
  console.log(findTrailer);

  const { slug: movieID } = useParams();
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const DetailMovie = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
  );
  console.log(DetailMovie);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <img
              src={`https://image.tmdb.org/t/p/w300${DetailMovie.poster_path}`}
              alt=""
            />
          </Col>
          <Col lg={6}>
            <div class="col-lg-9">
              <h1>{DetailMovie.original_title}</h1>
              <div class="yearPro d-flex align-items-center gap-2">
                <p class="year mb-0">2024-07-11</p>
                <p class="kind">Action,Thriller,Horror,Science Fiction</p>
                <p class="time mb-0">
                  <i class="fa-regular fa-clock"></i> {DetailMovie.runtime}
                </p>
              </div>
              <div class="rate d-flex align-items-center">
                <p class="number-rate">{DetailMovie.vote_average}</p>
                <p class="user">user score</p>
                <p class="playtrailer" onClick={handleShow}>
                  <i class="fa-solid fa-play"></i> Play trailer
                </p>
              </div>
              <h3>Can You Bury Your Past?</h3>
              <h2>Overview</h2>
              <p class="overview">
                Due to sudden deteriorating weather conditions, visibility on
                the Airport Bridge is severely impaired, leaving people stranded
                and at risk of the bridge collapsing due to a series of chain
                collisions and explosions. Amidst the chaos, the canine subjects
                "Echo" from the military experiment "Project Silence," who were
                being transported in secret, break free, and all human survivors
                become targets of relentless attacks.
              </p>
            </div>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/As-vKW4ZboU?si=fgBq2ceaMXJO00C9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Detail;
