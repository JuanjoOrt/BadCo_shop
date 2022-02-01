import InputText from '../../../../Components/Forms/InputText/InputText'
import { Formik, Form } from 'formik'
import './styles.scss'
import InputNumber from '../../../../Components/Forms/InputNumber/InputNumber'

export default function FormCheckout () {
  return (
    <div className='form-checkout'>
      <Formik
        initialValues={ { name: '', dni: '' } }
        onSubmit={() => console.log('holiwi')}
      >
        <Form>
          <InputText id='name' name='name'/>
          <InputDNI id='dni' name='dni' pattern="[0-9]{8}[A-Za-z]{1}"/>
        </Form>
      </Formik>
    </div>
  )
}
