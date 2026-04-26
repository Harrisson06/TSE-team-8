// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 24/04/2026

import {useNavigate } from 'react-router-dom'
import InstallPrompt from '../components/installPrompt'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div> 
            <h1>Welcome</h1>
            <p>Scan a QR code at a location to start a lesson.</p>
            <InstallPrompt />
            <button onClick={() => navigate('/scan')}>Open Scanner</button>
        </div>
    )
}