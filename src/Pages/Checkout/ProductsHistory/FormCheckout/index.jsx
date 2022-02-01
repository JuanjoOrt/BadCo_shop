import InputText from '../../../../Components/Forms/InputText/InputText'
import { Formik, Form } from 'formik'
import './styles.scss'
import InputDNI from '../../../../Components/Forms/InputDNI/InputDni'
import InputPhone from '../../../../Components/Forms/InputPhone/InputPhone'
import InputNumber from '../../../../Components/Forms/InputNumber/InputNumber'
import InputSelect from '../../../../Components/Forms/InputSelect/InputSelect'

export default function FormCheckout () {
  return (
    <div className='form-checkout'>
      <Formik
        initialValues={ { name: '', dni: '', telephone: '', postalCode: '' } }
        onSubmit={() => console.log('holiwi')}
      >
        <Form>
          <InputText id='name' name='name'/>
          <InputDNI id='dni' name='dni'/>
          <InputPhone id='telephone' name='telephone' />
          <InputNumber id='postalCode' name='postalCode' format="#####"/>
          <InputSelect>
            <option value="1">1</option>
          </InputSelect>
        </Form>
      </Formik>
    </div>
  )
}
