import InputText from '../../../../Components/Forms/InputText/InputText'
import { Formik, Form } from 'formik'
import InputDNI from '../../../../Components/Forms/InputDNI/InputDni'
import InputPhone from '../../../../Components/Forms/InputPhone/InputPhone'
import InputNumber from '../../../../Components/Forms/InputNumber/InputNumber'
import Alert from '../../../../Components/Alert/Alert'
import 'react-credit-cards/es/styles-compiled.css'
import Cards from 'react-credit-cards'
import { useState } from 'react'
import './styles.scss'

export default function FormCheckout () {
  const [focusCard, setFocusCard] = useState('name')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCVV, setCardCVV] = useState('')

  return (
    <div className='form-checkout'>
      <div className='products-history__title'>Información del comprador</div>
      <hr/>
      <Formik
        initialValues={ { name: '', dni: '', telephone: '', postalCode: '', country: '', cardName: '', cardNumber: '', cardExpiry: '', cardCVV: '' } }
        onSubmit={() => console.log('holiwi')}
      >
        <Form>
          <div className='header-form'>
            <InputText id='name' name='name' className='margin-bottom'/>
            <div className='flex-two-elements'>
              <InputDNI id='dni' name='dni' className='margin-bottom form-dni'/>
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
            <div className='bottom-form__left'>
              <Cards
                cvc={cardCVV}
                expiry={cardExpiry.replace('/', '')}
                name={cardName}
                number={cardNumber}
                focused={focusCard}
              />
            </div>
            <div className='bottom-form__right'>
              <InputText
                id='cardName'
                name='cardName'
                onFocus={() => setFocusCard('number')}
                onChange={(e) => setCardName(e.target.value)} value={cardName}
              />
              <InputNumber
                id='cardNumber'
                name='cardNumber'
                format='#### #### #### ####'
                onFocus={() => setFocusCard('number')}
                onChange={(e) => setCardNumber(e.target.value)} value={cardNumber}
              />
              <div className='flex-two-elements'>
                <InputNumber
                  id='cardExpiry'
                  name='cardExpiry'
                  format='## / ##'
                  className='form-dni'
                  onFocus={() => setFocusCard('expiry')}
                  onChange={(e) => setCardExpiry(e.target.value)} value={cardExpiry}
                />
                <InputNumber
                  id='cardCVV'
                  name='cardCVV'
                  format='###'
                  className='form-phone'
                  onFocus={() => setFocusCard('cvc')}
                  onChange={(e) => setCardCVV(e.target.value)} value={cardCVV}
                />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
