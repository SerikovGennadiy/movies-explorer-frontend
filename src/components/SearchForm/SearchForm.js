import './SearchForm.css';

import FieldCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__input-box">
        <input className="search-form__input" placeholder="Фильм" type="text"></input>
        <button className="search-form__submit" type="submit">Найти</button>
      </div>
      <FieldCheckbox mix={"search-form__checkbox"}/>
    </form>
  )
}

export default SearchForm;
