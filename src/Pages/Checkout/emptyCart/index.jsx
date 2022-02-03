import Unicorn from '../../../styles/assets/unicorn.png'

export default function EmptyCart () {
  return (
    <div className='not-found'>
      <div className='not-found__unicorn'><img src={Unicorn} alt="imagen de unicornio"/></div>
      <div className='not-found__text'>¡Vaya! Parece que el carro de compra esta vacío!!</div>
    </div>
  )
}
