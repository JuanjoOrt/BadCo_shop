import './SizeTag.scss'

export default function SizeTag ({ children, onClick, active = false }) {
  return (
    <div className={`sizetag ${active ? 'active' : ''}`} onClick={onClick}>{children}</div>
  )
}
