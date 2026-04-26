import { useEffect, useRef } from 'react'
import { BrowserQRCodeReader, VideoInputDevice } from '@zxing/library'

// QrReader mounts the camera viewfinder into a div and starts scanning.
// Props:
//   onResult(locationId) — called once when a valid QR code is decoded
//   onError(message)     — called if something goes wrong

export default function QrReader({ onResult, onError }) {
  const videoRef = useRef(null)
  const readerRef = useRef(null)

  useEffect(() => {
    // Create the scanner instance
    const reader = new BrowserQRCodeReader()
    readerRef.current = reader

    reader.decodeFromVideoDevice(
      null, 
      videoRef.current,
      (result, err) => {
        if (result) {
          // Extract loc id from end of the URL
          const locationId = result.getText().split('/').pop()
          onResult(locationId)
          // Stop scanning when result found
          reader.reset()
        }
      } 
    ).catch((err) => {
      console.error('QrReader failed to start:', err)
      if (onError) onError('Could not start the camera.')
    })

    // Cleanup - Stops camera when component unmounts
    return () => {
      if (readerRef.current) readerRef.current.reset()
    }
  }, [])

  return (
    <div style={{ width:'100%', maxwidth: '500px', margin: '0 auto' }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ width:'100%', height: '400px', objectFit: 'cover' }}
        />
    </div>
  )
}