import { useField } from 'formik'
import lang from '../formLang.json'
import '../forms.scss'

export default function InputDni ({ id, className = '', validate, ...props }) {
  const [field, meta] = useField({ ...props, validate })
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classErrorInput = showError ? 'input-error' : ''
  const classErrorLabel = showError ? 'form-error' : ''
  const errorText = showError ? meta.error : ''

  return (
    <div className={`input-content ${className}`} >
      <input
        id={id}
        name={props.name}
        className={`input-content-input input ${classErrorInput}`}
        placeholder=' '
        maxLength={9}
        type='text'
        {...field}
        {...props}
      />
      <label htmlFor={id} className='input-content-label'>{name}</label>
      <div className={classErrorLabel}>{errorText}</div>
    </div>
  )
}
