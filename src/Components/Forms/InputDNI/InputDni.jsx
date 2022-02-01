import { useField } from 'formik'
import lang from '../formLang.json'
import '../forms.scss'

export default function InputDni ({ id, className = '', ...props }) {
  const [field, meta] = useField(props)
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''

  return (
    <div className={`input-content ${className}`} >
      <input
        id={id}
        name={props.name}
        className={`input-content-input input ${classError}`}
        placeholder=' '
        maxLength={9}
        type='text'
        {...field} {...props}
      />
      <label htmlFor={id} className='input-content-label'>{name}</label>
      { showError && <div className='form-error'>ErrorError</div>}
    </div>
  )
}
