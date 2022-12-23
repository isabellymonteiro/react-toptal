import { Song } from '../../App'
import './styles.css'

const SongCard = ({ 
  title,
  album,
}: Omit<Song, 'id'> ) => {
  return (
    <li className='songCard'>
      <img 
        className='songCard__img' 
        src={album.cover_medium} 
        alt={`${album.title} album cover`}
      />
      <span className='songCard__title'>{title}</span>
      <span className='songCard__album'>Album: {album.title}</span>
    </li>
  )
}

export default SongCard