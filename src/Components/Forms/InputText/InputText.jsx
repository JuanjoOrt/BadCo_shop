import { Field } from 'formik'
import './styles.scss'
import '../forms.scss'

export default function InputText ({ id, name, placeholder }) {
  return (
    <div className='inputText'>
      <div className='inputText-input'>
        <label htmlFor={id} className='inputText-label'>{name}</label>
        <Field
          id={id}
          name={name}
          placeholder={placeholder}
          type='text'
          className='input'
        />
      </div>
    </div>
  )
}
