import { useField } from 'formik'
import lang from '../formLang.json'
import NumberFormat from 'react-number-format'
import '../forms.scss'

export default function InputNumber ({ id, ...props }) {
  const [field, meta] = useField(props)
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''

  return (
    <div className='input-content'>
      <NumberFormat
        id={id}
        name={props.name}
        className={`input-content-input input ${classError}`}
        placeholder=' '
        {...field} {...props}
      />
      <label htmlFor={id} className='input-content-label'>{name}</label>
      { showError && <div className='form-error'>ErrorError</div>}
    </div>

  )
}
