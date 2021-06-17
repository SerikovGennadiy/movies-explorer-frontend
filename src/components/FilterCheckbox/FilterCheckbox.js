import '../FilterCheckbox/FilterCheckbox.css';
import { useEffect, useRef, useState } from 'react';

const FilterCheckbox = (props) => {
  const { mix = '', formProps } = props;
  const { register, setValue } = formProps;

  const check = useRef();
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(check.current.checked);
    setValue("short_film_only", checked)
  }

  useEffect(() => {
    setValue("short_film_only", checked)
  })

  return (
    <div className={`field-checkbox ${mix}`}>
      <input
        {...register("short_film_only")}
        className="field-checkbox__input"
        name="short_film_only"
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
