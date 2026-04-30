// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 30/04/2026

// ScanOverlay draws an animated targeting frame over the camera viewfinder
// shows four corner brackets and a moving scan line to indicate active scannig 

import './ScanOverlay.css'

export default function ScanOverlay() {
    return (
        <div className='scan-overlay'>
            <div className='scan-overlay__frame'>
                {/* Four corner brackets*/}
                <Corner position="top-left" />
                <Corner position="top-right"/>
                <Corner position="bottom-left"/>
                <Corner position="bottom-right"/>

                {/* Animated scan line */}
                <div className='scan-overlay__line' />
            </div>
        </div>
    )
}

// Corner brackets
function Corner({ position }) {
    return <div className={`scan-overlay__corner scan-overlay__corner--${position}`} />
}