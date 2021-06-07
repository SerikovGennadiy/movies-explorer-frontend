import '../FilterCheckbox/FilterCheckbox.css';
import { useRef, useState } from 'react';

const FilterCheckbox = (props) => {
  const { mix = '' } = props;

  const check = useRef();
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(check.current.checked);
  }

  return (
    <div className={`field-checkbox ${mix}`}>
      <input
        className="field-checkbox__input"
        name="search-box__short-movies-only"
        ref={check}
        type="checkbox"
        id="short-movie-check"
        onChange={onChange}
      />
      <label className="field-checkbox__label" htmlFor="short-movie-check">
        <div className="field-checkbox__block">
          <div className={`field-checkbox__switch ${checked && "field-checkbox__switch_checked"}`}></div>
        </div>
        Короткометражки</label>
    </div>
  )
}
export default FilterCheckbox;
