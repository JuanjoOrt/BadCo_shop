import { Field } from 'formik'
import './styles.scss'
import '../forms.scss'

export default function InputText ({ id, name }) {
  return (
    <div className='inputText'>
      <Field
        id={id}
        name={name}
        className='inputText-input input'
        placeholder={' '}
        type='text'
      />
      <label htmlFor={id} className='inputText-label'>{name}</label>
    </div>
  )
}
