import 'react-credit-cards/es/styles-compiled.css'
import Cards from 'react-credit-cards'
import './styles.scss'
import { useState } from 'react'
import InputText from '../../../../Components/Forms/InputText/InputText'
import InputNumber from '../../../../Components/Forms/InputNumber/InputNumber'

export default function Card () {
  const [focusCard, setFocusCard] = useState('name')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCVV, setCardCVV] = useState('')

  return <>
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
        onFocus={() => setFocusCard('name')}
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
  </>
}
