import { useEffect, useState } from 'react'

const useCurrentPosition = () => {
  const [position, setPosition] = useState({})
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  
  // without useEffect here, the code won't stop running
  useEffect(() => {
    const geolocationPromise = () => 
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => resolve({ latitude, longitude }),
        () => reject(new Error('Could not get location'))
      )
    })
  
    const getResponse = async () => {
      try {
        const geolocationResponse = await geolocationPromise()
        setPosition(geolocationResponse)
        setSuccess(true)
      } catch (err) {
        setError(true)
        setPosition(undefined)
        setSuccess(false)
      }
    }

    getResponse()
  }, [])
  
  return {
    position,
    success,
    error
  }
}

export default useCurrentPosition