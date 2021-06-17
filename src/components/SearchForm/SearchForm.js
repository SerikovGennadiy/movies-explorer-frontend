import './SearchForm.css';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMovies } from '../../contexts/MovieContext';
import { useModal } from '../../contexts/ModalContext';

import movieApi from '../../utils/MoviesApi';

import { filterMovies } from '../../utils/utils';
import FieldCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  const input = useRef();
  const { setMovies, setPreloader } = useMovies();
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
      movieApi.getMovies()
        .then(movies => {
          const filteredMovies = filterMovies(movies, filter.searched_movie, filter.short_film_only);
          setMovies(filteredMovies);
        })
        .then(() => setPreloader(false))
        .catch((err) => {
          console.log(err);
          setModal({
            message: 'Ошибка',
            isBad: true
          });
          setPreloader(false)}
      );
    }, 1000);
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
      <FieldCheckbox formProps={{register, setValue}}  mix={"search-form__checkbox"}/>
    </form>
  )
}

export default SearchForm;
