import InputText from '../../../../Components/Forms/InputText/InputText'
import { Formik, Form } from 'formik'
import InputDNI from '../../../../Components/Forms/InputDNI/InputDni'
import InputPhone from '../../../../Components/Forms/InputPhone/InputPhone'
import InputNumber from '../../../../Components/Forms/InputNumber/InputNumber'
import { validateDNI, validateEmptyInput } from '../../../../Components/Forms/validations'
import Alert from '../../../../Components/Alert/Alert'
import './styles.scss'
import Card from './Card'

export default function FormCheckout () {
  return (
    <div className='form-checkout'>
      <div className='products-history__title'>Información del comprador</div>
      <hr/>
      <Formik
        initialValues={ { name: '', dni: '', address: '', telephone: '', postalCode: '', country: '', cardName: '', cardNumber: '', cardExpiry: '', cardCVV: '' } }
        onSubmit={(values) => alert(values)}
      >
        <Form>
          <div className='header-form'>
            <InputText id='name' name='name' className='margin-bottom' validate={validateEmptyInput}/>
            <div className='flex-two-elements'>
              <InputDNI id='dni' name='dni' className='margin-bottom form-dni' validate={validateDNI}/>
              <InputPhone id='telephone' name='telephone' className='margin-bottom form-phone'/>
            </div>
            <InputText id='address' name='address' className='margin-bottom'/>
            <div className='flex-two-elements'>
              <InputNumber id='postalCode' name='postalCode' format="#####" className='margin-bottom form-dni'/>
              <InputText id='country' name='country' className='margin-bottom form-phone'/>
            </div>
          </div>
          <Alert>Está pagina es un proyecto con fines educativos, por favor, no pongas datos reales.</Alert>
          <div className='bottom-form'>
            <Card />
          </div>
          <div className='header-form__buttonContainer'>
            <button type='submit' className='detail-content__button'>Completar</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
