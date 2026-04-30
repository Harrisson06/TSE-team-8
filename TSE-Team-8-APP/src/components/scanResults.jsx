// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 30/04/2026

// ScanResults shows brief feedback after a QR code is decoded
// Used as an overlay between scan and redirect to give the user confirmation

export default function ScanResult({ status, message }) {
    if (!status) return null
    
    const isSuccess = status === 'success'

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 15, 15, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.2s ease-out'
        }}>
            <div style={{
                fontSize: '64px',
                marginBottom: '16px'
            }}>
                {isSuccess ? '✅' : '❌'}
            </div>

            <h2 style={{
                fontSize: '24px',
                color: isSuccess ? '#00ff88' : '#ff4444', 
                marginBottom: '8px'
            }}>
                {isSuccess ? 'QR code scanned!' : 'Scan failed'}
            </h2>

            {message && (
                <p style={{
                    fontSize: '16px',
                    color: '#aaa',
                    textAlign: 'center',
                    maxWidth: '300px',
                    margin: '0 20px'
                }}>
                    {message}
                </p>
            )}

            <style>{`
            @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
            }
            `}</style>
        </div>
    )
}