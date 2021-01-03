import React, { useState, useEffect } from 'react';
import instance from './axios';
import requests from './request';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    
    useEffect(() => {
        // if [], run once when row loads. dont run again. [movies] - anytime movie changes itll run again
        const fetchdata = async () => {
            const req = await instance.get(props.fetchURL);
            setMovies(req.data.results);
            return req;
        }
        fetchdata()
    }, [props.fetchURL]); //anything inside useEffect needs to be passed here, comes from outside

    const opts = {
        height: "390",
        width:" 100%",
        playerVars: {
        autoplay:1,
        },
    }
    const handleClick = (movie) => {
        console.log(movie)
        if (trailerUrl){
            setTrailerUrl('');
        }else{

        
            movieTrailer(movie?.name || movie?.title|| "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search); //give ur after the ?
                setTrailerUrl(urlParams.get('v')) //after v=
            }).catch(error => console.log(error))
        }
    }
    return (
        <div className="row">

            <h2>{props.title}</h2>

            <div className="row_posters">
                
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick = {() => handleClick(movie)}
                        className={`row_poster  ${props.isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${props.isLargeRow? movie.poster_path:movie.backdrop_path}`}
                        alt={movie.original_title} />
                ))}


            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
};


export default Row