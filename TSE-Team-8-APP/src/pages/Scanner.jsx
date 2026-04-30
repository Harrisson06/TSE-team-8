// LAST EDITED BY JAKUB RADZIWON
// DATE: 27/04/2026
// UPDATED SCANNER RESULT HANDLING AND WRAPPED CAMERA ACCESS BETTER

import { useNavigate } from 'react-router-dom'
import { lazy, Suspense, useRef, useEffect} from 'react'
import useCamera, {CAMERA_STATUS } from '../hooks/useCamera'
import PermissionGate from '../components/permissionGate'
import ScanOverlay from '../components/scanOverlay'
import ScanResult from '../components/scanResults'

// Lazy loads the QrReader to not error the app
const QrReader = lazy(() => import('../components/QrReader'))

export default function Scanner() {
    const navigate = useNavigate()
    const { status, requestCamera } = useCamera()
    const hasScanned = useRef(false)
    const [scanResult, setScanResult] = useState(null)

    useEffect(() => {
        hasScanned.current = false;
    }, []);


    /* prints whatevers scanned (testing only)
    function handleResult(result) {
        console.log("SCAN RESULT:", result);
    }
    */

   
    // Called by QrReader when a QR code is successfully decoded
    function handleResult(result) {
        const text = result?.text || result;
        if (!text) return;

        const locationId = text.split('/').filter(Boolean).pop();
        if (!locationId) return; // prevents any undefined navigations
        if (hasScanned.current) return; // stops any double scans
        hasScanned.current = true; 
        
        setScanResult({ status: 'success', message: `Loading lesson: ${locationId}`})

        setTimeout(() => {
            if (locationId === "lesson3") {
            navigate("/lesson3");
        } else {
            navigate(`/quiz/${locationId}`);
            }
        }, 1000);
    }

    // Called by QrReader if the camera fails to start
    function handleError(message) {
        console.error(message)
        setScanResult({ status: 'error', message })
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: '20px' }}>Scan a QR code</h1>
        
        <PermissionGate status={status} onRequest={requestCamera}>
            <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '20px' }}>
                Point your camera at a QR code to start a lesson.
            </p>
            <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
                <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading scanner</p>}>
                <QrReader onResult={handleResult} onError={handleError} />
                </Suspense>
                <ScanOverlay />
            </div>
        </PermissionGate>

        {scanResult && (
            <scanResult status={scanResult.status} message={scanResult.message} />
        )}
        </div>
    )
}