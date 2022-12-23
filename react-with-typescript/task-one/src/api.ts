const URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/93674/top?limit=50'

export const getSongs = async() => {
  const response = await fetch(URL)
  
  if (!response.ok) {
    throw new Error('Oops... Something went wrong.')
  }

  const data = await response.json()
  return data.data
}