// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, isActive, changeActiveId} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onChangeActiveId = () => {
    changeActiveId(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onChangeActiveId}
      >
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
