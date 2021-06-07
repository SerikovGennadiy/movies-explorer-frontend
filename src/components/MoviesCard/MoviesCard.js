/* eslint-disable react-hooks/exhaustive-deps */
import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { useMovies } from '../../contexts/MovieContext';
import MovieCardCheckbox from '../MovieCardCheckbox/MovieCardCheckbox';

const MoviesCard = ({ movieCard, isSaved }) => {
  const [checked, setChecked] = useState(false);

  const { image, description, duration } = movieCard;
  const { savedMovies, setSavedMovies } = useMovies();

  useEffect(() => {
    //const arr = savedMovies.filter(card => JSON.stringify(card) === JSON.stringify(movieCard));
    const arr = savedMovies.filter(card => card.id === movieCard.id);
    if (arr.length !== 0) {
      setChecked(true);
    }
  },[]);

  const onChange = (e) => {
    if(e.target.checked){
      setSavedMovies([...savedMovies, movieCard])
      setChecked(true);
    }
    else {
      const arr = savedMovies.filter(card => card.id !== movieCard.id);
      setSavedMovies([...arr]);
      setChecked(false);
    }
  }

  const removeSavedMovie = (e) => {
    const arr = savedMovies.filter(card => card.id !== movieCard.id);
    setSavedMovies([...arr]);
    e.target.closest('.movie-card').remove();
  }

  return (
    <div className="movie-card">
      <img className="movie-card__image" src={image} alt="Фильм" />
      <div className="movie-card__title-block">
        <p className="movie-card__title">{description}</p>
        { !isSaved && <MovieCardCheckbox checked={checked} id={movieCard.id} onCheckChange={onChange}/> }
        {  isSaved && <button className="movie-card__delete" type="button" onClick={removeSavedMovie}></button> }
      </div>
      <p className="movie-card__duration">{duration}</p>
    </div>
  )
}

export default MoviesCard;
