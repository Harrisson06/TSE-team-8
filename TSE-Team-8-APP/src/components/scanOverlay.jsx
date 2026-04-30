// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 30/04/2026

// ScanOverlay draws an animated targeting frame over the camera viewfinder
// shows four corner brackets and a moving scan line to indicate active scannig 

export default function ScanOverlay() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none', // clicks pass through to elements below
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                position: 'realtive',
                width: '60%',
                aspectRatio: '1 / 1',
                maxWidth: '300px'
            }}>
                {/* Four corner brackets*/}
                <Corner position="top-left" />
                <Corner position="top-right"/>
                <Corner position="bottom-left"/>
                <Corner position="bottom-right"/>

                {/* Animated scan line */}
                <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
                    animation: 'scanLine 2s ease-in-out infinite'
                }} />
            </div>

            {/* Inline keyframes for the scan line animation */}
            <style>{`
                @keyframes scanline {
                0% { top: 0%; }
                50% { top: 100%; }
                100% { top: 0%; }
            }
            `}</style>
        </div>
    )
}

// Corner brackets
function Corner({ position }) {
    const size = '30px'
    const thickness = '3px'
    const colour = '#00ff88' // placeholder color

    // Each corner has two visible sizes | other two hidden
    const styles = {
        'top-left': {
            top: 0, left: 0, 
            borderTop: `${thickness} solid ${colour}`,
            borderLeft: `${thickness} solid ${colour}`
        },
        'top-right': {
            top: 0, right: 0,
            borderTop: `${thickness} solid ${colour}`,
            borderRight: `${thickness} solid ${colour}`
        },
        'bottom-left': {
            bottom: 0, left: 0,
            borderBottom: `${thickness} solid ${colour}`,
            borderLeft: `${thickness} solid ${colour}`
        },
        'bottom-right': {
            bottom: 0, right: 0,
            borderBottom: `${thickness} solid ${colour}`,
            borderRight: `${thickness} solid ${colour}`
        }
    }

    return (
        <div style={{
            position: 'absolute',
            width: size,
            height: size,
            ...styles[position]
        }} />
    )
}