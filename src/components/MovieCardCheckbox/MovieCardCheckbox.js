/* eslint-disable react-hooks/exhaustive-deps */
import '../MovieCardCheckbox/MovieCardCheckbox.css';
import { useEffect, useRef } from 'react';

const MovieCardCheckbox = ({checked, id, onCheckChange}) => {
  const check = useRef();

  useEffect(() => {
    check.current.checked = checked;
  }, []);

  const onChange = (e) => {
    onCheckChange(e);
  }

  return (
    <div className="movie-checkbox">
      <input
        className="movie-checkbox__input"
        name="movie-choosen"
        ref={check}
        type="checkbox"
        id={id}
        onChange={onChange}
      />
      <label className="movie-checkbox__label" htmlFor={id}>
        <div className="movie-checkbox__block">
          <div className={`movie-checkbox__switch ${checked ? "movie-checkbox__switch_checked" : ""}`}></div>
        </div>
      </label>
    </div>
  )
}
export default MovieCardCheckbox;
