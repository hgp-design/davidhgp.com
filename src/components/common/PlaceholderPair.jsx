import PlaceholderBlock from './PlaceholderBlock'
import './PlaceholderPair.css'

function PlaceholderPair({ left, right }) {
  return (
    <div className="placeholder-pair">
      <PlaceholderBlock {...left} aspectRatio={left.aspectRatio || '1/1'} />
      <PlaceholderBlock {...right} aspectRatio={right.aspectRatio || '1/1'} />
    </div>
  )
}

export default PlaceholderPair
