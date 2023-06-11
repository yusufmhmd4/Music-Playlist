import './index.css'
import {FiTrash} from 'react-icons/fi'

const PlaylistCard = props => {
  const {element, onDelete} = props
  const {id, imageUrl, name, genre, duration} = element
  const deleteMusicCard = () => {
    onDelete(id)
  }
  return (
    <li className="music-card">
      <div className="image-container">
        <img src={imageUrl} alt="track" className="music-image" />
        <div className="music-name-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="button"
          onClick={deleteMusicCard}
          data-testid="delete"
        >
          <FiTrash className="delete-icon" />
        </button>
      </div>
    </li>
  )
}
export default PlaylistCard
