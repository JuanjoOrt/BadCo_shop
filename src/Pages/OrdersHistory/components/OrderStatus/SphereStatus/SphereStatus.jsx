import './styles.scss'

// type: empty/done/actual
export default function SphereStatus ({ type = 'actual', line }) {
  return (
    <div className='sphere'>
      <div className={`sphere-status ${type}`} />
      {line && <div className={`sphere-line ${type}`}/>}
    </div>
  )
}
