import { useField } from 'formik'
import lang from '../formLang.json'
import './styles.scss'
import '../forms.scss'

export default function InputDni ({ id, ...props }) {
  const [field, meta] = useField(props)
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''

  return (
    <div className='inputDni'>
      <input
        id={id}
        name={props.name}
        className={`inputDni-input input ${classError}`}
        placeholder=' '
        type='text'
        {...field} {...props}
      />
      <label htmlFor={id} className='inputDni-label'>{name}</label>
      { showError && <div className='form-error'>ErrorError</div>}
    </div>
  )
}
