import React from 'react';
import {Link} from "react-router-dom";


const CardMovie = (props) => {
    return (
        <Link className="cardmovie" to={`/detail-movie/${props.id}`}>
            <div className="thumb">
                <img src={`https://image.tmdb.org/t/p/w300${props.img}`} alt="" />
            </div>
            <h3 className="mb-3 mt-2">{props.title}</h3>
            <div className=".number d-flex alignitems-center">
                <p className="day">{props.date}</p></div>
            <p className="rate">
                <i className="fa-solid fa-star"></i>{props.vote_average}
            </p>
        </Link>
    );
};

export default CardMovie;