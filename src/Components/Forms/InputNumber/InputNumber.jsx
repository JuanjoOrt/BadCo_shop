import { useField } from 'formik'
import lang from '../formLang.json'
import NumberFormat from 'react-number-format'
import '../forms.scss'

export default function InputNumber ({ id, className = '', validate, ...props }) {
  const [field, meta] = useField({ ...props, validate })
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''
  const classErrorLabel = showError ? 'form-error' : ''
  const errorText = showError ? meta.error : ''

  return (
    <div className={`input-content ${className}`} >
      <NumberFormat
        id={id}
        name={props.name}
        className={`input-content-input input ${classError}`}
        placeholder=' '
        {...field} {...props}
      />
      <label htmlFor={id} className='input-content-label'>{name}</label>
      <div className={classErrorLabel}>{errorText}</div>
    </div>

  )
}
