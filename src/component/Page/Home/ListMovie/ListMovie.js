import React, { useEffect } from "react";
import { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import "./ListMovie.css";
import CardMovie from '../../../Global/CardMovie/CardMovie';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../../../features/useFetch";

const ListMovie = (props) => {
    const API_KEY = "e9e9d8da18ae29fc430845952232787c";
    const movie = useFetch(`https://api.themoviedb.org/3/movie/${props.data}?api_key=${API_KEY}&page=1`)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };

    return (
        <div className="list-movie">
            <Container>
                <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <h2>{props.title}</h2>
                </div>
           
                <Slider {...settings}>
                    {movie.map((item) => (
                            <div key={item.id}>
                                <CardMovie title={item.original_title} date={item.date} grade={item.vote_average} img={item.poster_path}></CardMovie>
                            </div>
                    ))}
                        </Slider>
            </Container>
        </div>

    );
};

export default ListMovie;