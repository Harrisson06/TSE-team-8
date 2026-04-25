import { useEffect, useRef } from 'react'

export default function QrReader({ onResult, onError }) {
  const videoRef = useRef(null)

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play()
        }
      })
      .catch(err => {
        console.error('Camera error:', err)
        if (onError) onError('Could not start camera')
      })
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ width: '100%', height: '400px', background: 'red' }}
      />
    </div>
  )
}