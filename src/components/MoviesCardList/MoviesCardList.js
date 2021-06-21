/* eslint-disable react-hooks/exhaustive-deps */
import './MoviesCardList.css';

import { useEffect, useState } from 'react';
import { useMovies } from '../../contexts/MovieContext';
import { useSkipTake } from '../../utils/utils';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = (props) => {
  const { isSavedList = false } = props;

  const { preloader, setPreloader, movies, savedMovies } = useMovies();
  const movieList = isSavedList ? savedMovies : movies;

  const [ buffer, setBuffer ] = useState([]);
  const [ note, setNote ] = useState('');

  const ranger = useSkipTake();

  useEffect(() => {
    setNote('');
  }, []);

  useEffect(() => {
    setNote('');
    setBuffer([...movieList.slice(0, ranger.partQuantity)]);
    if(movieList.length === 0) {
      setNote('Ничего не найдено');
    }
  },[movieList])

  const upLoad = () => {
    setPreloader(true);
    setTimeout(() => {
      setBuffer([...buffer, ...movieList.slice(buffer.length, buffer.length + ranger.uploadQuantity)])
      setPreloader(false);
    }, 2000);
  }

  const remain = movieList.length - buffer.length;

  return (
    <div className="movie-cards">
      <section className="movie-cards__list">
        { !preloader && buffer.length === 0 && <p className="movie-cards__empty-result">{note}</p>}
        { buffer.map((movieCard) => {
                        const { id = movieCard.movieId } = movieCard;
                        return <MoviesCard key={id} movieCard={movieCard} isSavedList={isSavedList}/>
                     }) }
        { remain > 0 && <button className="movie-cards__button-upload" onClick={upLoad} type="button">Еще</button> }
      </section>
      { preloader && <Preloader /> }
    </div>
  )
}

export default MoviesCardList;
