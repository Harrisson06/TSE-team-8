import { useState, useEffect } from 'react'

// Possible states the camera permissions can be in
export const CAMERA_STATUS = {
    IDLE: 'idle',               // not asked yet
    REQUESTING: 'requesting',   // asking the user
    GRANTED: 'granted',         // user allowed it
    DENIED: 'denied',           // user denied it
    UNSUPPORTED: 'unsupported'  // browser doesnt support 
}

export default function useCamera() {
    const [status, setStatus] = useState(CAMERA_STATUS.IDLE)

    useEffect(() => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setStatus(CAMERA_STATUS.UNSUPPORTED)
        }
    }, [])

    async function requestCamera() {
        setStatus(CAMERA_STATUS.REQUESTING)

        try {
            await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment'}
            })
            setStatus(CAMERA_STATUS.GRANTED)
        } catch (err) {
            console.error('Camera permission denied:', err)
            setStatus(CAMERA_STATUS.DENIED)
        }
    }

    return { status, requestCamera }
}