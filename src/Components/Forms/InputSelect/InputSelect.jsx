import { useField } from 'formik'
import lang from '../formLang.json'
import '../forms.scss'

export default function InputSelect ({ id, children, ...props }) {
  const [field, meta] = useField(props)
  const name = lang[props.name] ? lang[props.name] : props.name
  const showError = meta.touched && meta.error
  const classError = showError ? 'input-error' : ''

  return (
    <div className='input-content'>
      <select {...field} className={`input-field ${classError}`}>
        {children}
      </select>
      <label htmlFor={id} className='input-content-label'>{name}</label>
      { showError && <div className='form-error'>ErrorError</div>}
    </div>

  )
}
