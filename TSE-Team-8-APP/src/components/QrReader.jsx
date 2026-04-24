import { useEffect, useRef } from 'react'
import { Html5Qrcode } from 'html5-qrcode'

// QrReader mounts the camera viewfinder into a div and starts scanning.
// Props:
//   onResult(locationId) — called once when a valid QR code is decoded
//   onError(message)     — called if something goes wrong

export default function QrReader({ onResult, onError }) {
  const scannerRef = useRef(null) // holds the Html5Qrcode instance
  const divId = 'qr-reader-view'  // id of the div the library mounts into

  useEffect(() => {
    // Create the scanner instance
    const scanner = new Html5Qrcode(divId)
    scannerRef.current = scanner

    const config = {
      fps: 10,          // how many frames per second to scan
      qrbox: 250,       // size of the scanning box in px
      aspectRatio: 1.0  // square viewfinder
    }

    scanner.start(
      { facingMode: 'environment' }, // use rear camera
      config,
      (decodedText) => {
        // decodedText is the full URL
        // extracts the locationId from the end of the URL
        const locationId = decodedText.split('/').pop()
        onResult(locationId)

        // Stop scanning once a result is found
        scanner.stop().catch(() => {})
      },
      () => {
        // This fires constantly while no QR is in frame
      }
    ).catch((err) => {
      console.error('QrReader failed to start:', err)
      if (onError) onError('Could not start the camera.')
    })

    // Cleanup — stop the camera when the component unmounts
    return () => {
      scanner.stop().catch(() => {})
    }
  }, []) // only runs once on mount

  return (
    <div>
      {/* html5-qrcode mounts the camera feed into this div */}
      <div id={divId} style={{ width: '100%' }} />
    </div>
  )
}