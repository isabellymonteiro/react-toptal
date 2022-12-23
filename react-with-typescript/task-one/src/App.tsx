import { useEffect, useState } from 'react'
import { getSongs } from './api'
import SongList from './components/SongList'

import './App.css'
import './variables.css'

type Album = {
  title: string,
  cover_medium: string
}

export type Song = {
  id: string,
  title: string,
  album: Album
}

function App() {
  const [songList, setSongList] = useState<Song[]>([])
  const [error, setError] = useState('')
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const songs: Song[] = await getSongs()
       
        const mainSongData = songs.map(song => {
          return {
            id: song.id,
            title: song.title,
            album: {
              title: song.album.title,
              cover_medium: song.album.cover_medium
            }
          }
        })

        setSongList(mainSongData)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (loading) {
    return (
      <div className='app'>
         <p className='loading'>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='app'>
        <p className='error'>{error}</p>
      </div>
    )
  }

  return (
    <div className='app'>
      <SongList songs={songList} />
    </div>
  )
}

export default App
