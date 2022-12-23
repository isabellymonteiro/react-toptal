import { Song } from '../../App'
import SongCard from '../SongCard'
import './styles.css'

const SongList = ({ songs }: { songs: Song[] }) => {
  return (
    <ul className='songList'>
      {songs.map(song => <SongCard key={song.id} title={song.title} album={song.album} />)}
    </ul>
  )
}

export default SongList