import InputText from '../../../../Components/Forms/InputText/InputText'
import { Formik } from 'formik';

export default function FormCheckout () {
  return (
    <div className='form-checkout'>
      <Formik
        initialValues={ { name: '' } }
      >
      <InputText id='name' name='Nombre'/>
      </Formik>
    </div>
  )
}
