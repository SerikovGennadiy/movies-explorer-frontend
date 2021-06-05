/* eslint-disable react-hooks/exhaustive-deps */
import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import { useMovies } from '../../contexts/MovieContext';
import { useSkipTake } from '../../utils/utils';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = (props) => {
  const { movies } = props;
  const { isSaved = false } = props;

  const { preloader, setPreloader } = useMovies();
  const [buffer, setBuffer] = useState([]);
  const ranger = useSkipTake();

  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setBuffer([...movies.slice(0, ranger.partQuantity)]);
      setPreloader(false);
    }, 2000);
  },[])

  const upLoad = () => {
    setPreloader(true);
    setTimeout(() => {
      setBuffer([...buffer, ...movies.slice(buffer.length, buffer.length + ranger.uploadQuantity)])
      setPreloader(false);
    }, 2000);
  }

  const remain = movies.length - buffer.length;

  return (
    <div className="movie-cards">
      <section className="movie-cards__list">
        { !preloader && buffer.length === 0 && <p className="movie-cards__empty-result">Ничего не найдено</p>}
        { buffer.map((movieCard, index) => <MoviesCard key={index} movieCard={movieCard} isSaved={isSaved}/>) }
        { remain > 0 && <button className="movie-cards__button-upload" onClick={upLoad} type="button">Еще</button> }
      </section>
      { preloader && <Preloader /> }
    </div>
  )
}

export default MoviesCardList;
