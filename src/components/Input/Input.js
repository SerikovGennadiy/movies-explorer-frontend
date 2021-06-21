import './Input.css';
import { useRef } from 'react';

const Input = (props) => {

  const input = useRef();
  const { id, label, type = 'text', placeholder, name, value = '', pattern, formProps } = props;
  const { register, errors, setValue, blocked = false} = formProps;

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>
      <input
        { ...register(name, pattern) }
        className={ `field__input ${ errors?.[name] && 'field__input_error_active' }`}
        type={type}
        placeholder={placeholder}
        name={name}
        ref={input}
        defaultValue={value}
        autoComplete="off"
        onChange={()=>{ setValue(name, input.current.value)}}
        disabled={blocked}
      />
      <span className={ `field__error ${ errors?.[name] && 'field__error_active' }`}>
        { errors?.[name]?.type === 'required' && 'Поле обязательно для заполнения' }
        { errors?.[name]?.type === 'pattern' && 'Неверный формат' }
        { (errors?.[name]?.type === 'minLength' || errors?.[name]?.type === 'maxLength') &&
          `Поле должно занимать от ${pattern.minLength} до ${pattern.maxLength}`}
      </span>
    </div>
  )
}

export default Input;
