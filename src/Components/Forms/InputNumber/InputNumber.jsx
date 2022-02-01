import { useField } from 'formik'
import lang from '../formLang.json'
import './styles.scss'
import '../forms.scss'

export default function InputNumber ({ id, min = 0, max = 0, ...props }) {
  const [field, meta] = useField(props)
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''

  return (
    <div className='inputNumber'>
      <input
        id={id}
        name={props.name}
        className={`inputNumber-input input ${classError}`}
        placeholder=' '
        type='number'
        min={min}
        max={max}
        {...field} {...props}
      />
      <label htmlFor={id} className='inputNumber-label'>{name}</label>
      { showError && <div className='form-error'>ErrorError</div>}
    </div>
  )
}
