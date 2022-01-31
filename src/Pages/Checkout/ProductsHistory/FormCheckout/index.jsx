import InputText from '../../../../Components/Forms/InputText/InputText'
import { Formik, Form } from 'formik'
import './styles.scss'

export default function FormCheckout () {
  return (
    <div className='form-checkout'>
      <Formik
        initialValues={ { name: '' } }
        onSubmit={() => console.log('holiwi')}
      >
        <Form>
          <InputText id='name' name='name'/>
        </Form>
      </Formik>
    </div>
  )
}
