import InputText from '../../../../Components/Forms/InputText/InputText'
import { Formik, Form } from 'formik'
import InputDNI from '../../../../Components/Forms/InputDNI/InputDni'
import InputPhone from '../../../../Components/Forms/InputPhone/InputPhone'
import InputNumber from '../../../../Components/Forms/InputNumber/InputNumber'
import './styles.scss'

export default function FormCheckout () {
  return (
    <div className='form-checkout'>
      <Formik
        initialValues={ { name: '', dni: '', telephone: '', postalCode: '', country: '', cardName: '', cardNumber: '', cardExpiry: '', cardCVV: '' } }
        onSubmit={() => console.log('holiwi')}
      >
        <Form>
          <InputText id='name' name='name' className='margin-bottom'/>
          <InputDNI id='dni' name='dni' className='margin-bottom'/>
          <InputPhone id='telephone' name='telephone' className='margin-bottom'/>
          <InputNumber id='postalCode' name='postalCode' format="#####"className='margin-bottom'/>
          <InputText id='country' name='country'className='margin-bottom'/>
          <InputText id='cardName' name='cardName' />
          <InputNumber id='cardNumber' name='cardNumber' format='#### #### #### ####' />
          <InputNumber id='cardExpiry' name='cardExpiry' format='## / ##' />
          <InputNumber id='cardCVV' name='cardCVV' format='###' />
        </Form>
      </Formik>
    </div>
  )
}
