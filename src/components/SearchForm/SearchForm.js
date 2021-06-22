import './SearchForm.css';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { MovieProvider, useMovies } from '../../contexts/MovieContext';
import { useModal } from '../../contexts/ModalContext';

import { filterMovies, filterShortMovies, getLastMovies, getSavedMovies, saveLastMovies } from '../../utils/utils';

import FieldCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {
  const input = useRef();
  const { isSavedList } = props;

  const { setMovies, setPreloader, setSavedMovies, serverMovies } = useMovies();
  const { setModal } = useModal();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  })

  const submitHandler = (filter) => {
    setPreloader(true);
    setTimeout(() => {
      if(isSavedList) {
        let movies = getSavedMovies();
        movies = filterMovies(movies, filter.searched_movie);
        if(filter.short_film_only) {
          movies = filterShortMovies(movies, true);
        }
        setSavedMovies(movies);
        setPreloader(false)
      }
      else {
        //movieApi.getMovies()
        Promise.resolve(serverMovies)
          .then(movies => {
            let _movies = filterMovies(movies, filter.searched_movie);
            saveLastMovies(_movies)
            if(filter.short_film_only) {
              _movies = filterShortMovies(_movies);
            }
            setMovies(_movies);
          })
          .then(() => setPreloader(false))
          .catch((err) => {
            setModal({
              message: 'Ошибка',
              isBad: true
            });
            setPreloader(false);
          }
        );
      }
    }, 1000);
  }

  const onShortMovieChecked = (checkbox) => {
    const filter = checkbox.target.closest('form');
    const isChecked = checkbox.target.checked;
    if(isSavedList) {
      let movies = getSavedMovies();
      movies = filterMovies(movies, filter.searched_movie.value);
      if(isChecked) {
        movies = filterShortMovies(movies, true);
      }
      setSavedMovies(movies);
      setPreloader(false)
    } else {
      let movies = getLastMovies();
      if(isChecked) {
        movies = filterShortMovies(movies);
      }
      setMovies(movies);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit(submitHandler)}>
      <div className="search-form__input-box">
        <input
          {...register("searched_movie", {
            required: true,
          })}
          className={ `search-form__input ${ errors?.["searched_movie"] && 'search-form__input_error_active' }`}
          type="text"
          placeholder="Фильм"
          name="searched_movie"
          ref={input}
          autoComplete="off"
       />
        <span className={ `search-form__error ${ errors?.["searched_movie"] && 'search-form__error_active' }`}>
          { errors?.["searched_movie"]?.type === 'required' && 'Нужно ввести ключевое слово' }
        </span>
        <button className="search-form__submit" type="submit">Найти</button>
      </div>
      <FieldCheckbox formProps={{register, setValue}} onChange={onShortMovieChecked} mix={"search-form__checkbox"}/>
    </form>
  )
}

export default SearchForm;
