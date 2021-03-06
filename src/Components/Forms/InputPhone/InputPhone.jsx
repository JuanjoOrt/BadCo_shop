import { useField } from 'formik'
import NumberFormat from 'react-number-format'
import lang from '../formLang.json'
import '../forms.scss'

export default function InputPhone ({ id, className = '', validate, ...props }) {
  const [field, meta] = useField(props)
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''
  const classErrorLabel = showError ? 'form-error' : ''
  const errorText = showError ? meta.error : ''

  return (
    <div className={`input-content ${className}`} >
      <NumberFormat
        format="+34 ### ## ## ##"
        id={id}
        name={props.name}
        className={`input-content-input input ${classError}`}
        placeholder=' '
        type='text'
        {...field} {...props}
      />
      <label htmlFor={id} className='input-content-label'>{name}</label>
      <div className={classErrorLabel}>{errorText}</div>
    </div>
  )
}
