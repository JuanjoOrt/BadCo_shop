import './styles.scss'

// type: empty/done/actual
export default function SphereStatus ({ type = 'actual' }) {
  return <div className={`sphere-status ${type}`} />
}
