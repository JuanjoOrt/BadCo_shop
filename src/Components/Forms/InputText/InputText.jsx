import { useField } from 'formik'
import lang from '../formLang.json'
import './styles.scss'
import '../forms.scss'

export default function InputText ({ id, ...props }) {
  const [field, meta] = useField(props)
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''

  return (
    <div className='inputText'>
      <input
        id={id}
        name={props.name}
        className={`inputText-input input ${classError}`}
        placeholder=' '
        type='text'
        {...field} {...props}
      />
      <label htmlFor={id} className='inputText-label'>{name}</label>
      { showError && <div className='form-error'>ErrorError</div>}
    </div>
  )
}
