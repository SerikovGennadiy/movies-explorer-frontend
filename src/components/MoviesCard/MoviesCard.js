/* eslint-disable react-hooks/exhaustive-deps */
import './MoviesCard.css';
import MovieCardCheckbox from '../MovieCardCheckbox/MovieCardCheckbox';

import { useEffect, useState } from 'react';
import { useMovies } from '../../contexts/MovieContext';
import { useModal } from '../../contexts/ModalContext';
import { formatTime, formatTimeMilli, saveSavedMovies } from '../../utils/utils';
import { useHistory } from 'react-router-dom';

import mainApi from '../../utils/MainApi';

const MoviesCard = ({ movieCard, isSavedList }) => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const { setModal } = useModal();
  const { image, nameRU:description, duration:time, trailerLink, trailer } = movieCard;
  const { savedMovies, setSavedMovies, setPreloader } = useMovies([]);

  const imageUrl = isSavedList ? image : `https://api.nomoreparties.co${image.url}`;
  const formatDuration = isSavedList ? formatTimeMilli(time) : formatTime(time)
  const trailerUrl = isSavedList ? trailer : trailerLink;

  useEffect(() => {
    if(!isSavedList){
      const arr = savedMovies.filter(movie => movie.movieId === movieCard.id);
      if (arr.length !== 0) {
        setChecked(true);
      }
    }
  },[checked]);

  const removeMovie = (movieId) => {
    setPreloader(true);
    if(savedMovies.some(movie => movie.movieId === movieId)) {
      mainApi.deleteMovie(movieId)
      .then((data) => {
        if(data.message) {
          setModal({
            message: data.message,
            isBad: true,
          })
        }
        else {
          const arr = savedMovies.filter(movie => movie.movieId !== movieId);
          saveSavedMovies([...arr]);
          setSavedMovies([...arr]);
          setChecked(false);
          setModal({
            message: 'Успешно удалено'
          })
          if(arr.length === 0) {
            history.push('/movies');
          }
        }
        setPreloader(false);
      })
      .catch(err => {
        console.error(err);
        setPreloader(false);
      })
    }
    else {
      setPreloader(false);
    }
  }

  const onChange = (e) => {
    if(e.target.checked) {
      const {
         country,
         director,
         year,
         description,
         nameEN,
         nameRU,
      } = movieCard;

      setPreloader(true);
      mainApi.saveMovie(
        country,
        director,
        movieCard.duration * 60 * 1000 + '',
        year,
        description,
        imageUrl,
        trailerLink,
        nameRU,
        nameEN,
        imageUrl,
        movieCard.id,
      )
      .then((data) => {
        if(data.message) {
          setModal({
            message: data.message,
            isBad: true
          })
        }
        else {
          setModal({
            message: 'Фильм добавлен в коллекцию'
          })
          const _savedMovies = [...savedMovies, {
            country,
            director,
            duration: movieCard.duration * 60 * 1000,
            year,
            description,
            image: imageUrl,
            trailerLink,
            nameRU,
            nameEN,
            movieId: movieCard.id,
          }];

          setSavedMovies(_savedMovies)
          saveSavedMovies(_savedMovies);
          setChecked(true);
        }
        setPreloader(false);
      })
      .catch(err => {
        console.error(err);
        setPreloader(false);
      })
    }
    else {
      removeMovie(movieCard.id)
    }
  }

  const removeSavedMovie = (e) => {
    removeMovie(movieCard.movieId)
  }

  return (
    <div className="movie-card">
      <img className="movie-card__image" src={imageUrl} alt="Фильм" onClick={() => { window.open(trailerUrl) }}/>
      <div className="movie-card__title-block">
        <p className="movie-card__title">{description}</p>
        { !isSavedList && <MovieCardCheckbox checked={checked} id={movieCard.id} onCheckChange={onChange}/> }
        {  isSavedList && <button className="movie-card__delete" type="button" onClick={removeSavedMovie}></button> }
      </div>
      <p className="movie-card__duration">{formatDuration}</p>
    </div>
  )
}

export default MoviesCard;
