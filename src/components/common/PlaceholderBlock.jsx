import './PlaceholderBlock.css'

function PlaceholderBlock({ id, label, aspectRatio = '16/9', width = 'wide' }) {
  return (
    <div
      className={`placeholder-block${width === 'wide' ? ' placeholder-block--wide' : ''}`}
      id={id}
      style={{ '--placeholder-ratio': aspectRatio }}
    >
      <span className="placeholder-type">IMAGE PLACEHOLDER</span>
      <span className="placeholder-label">{label}</span>
    </div>
  )
}

export default PlaceholderBlock
