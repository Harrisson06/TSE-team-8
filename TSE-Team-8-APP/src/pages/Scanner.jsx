// LAST EDITED BY JAKUB RADZIWON
// DATE: 27/04/2026
// UPDATED SCANNER RESULT HANDLING AND WRAPPED CAMERA ACCESS BETTER

import { useNavigate } from 'react-router-dom'
import { lazy, Suspense, useRef, useEffect} from 'react'
import useCamera, {CAMERA_STATUS } from '../hooks/useCamera'

// Lazy loads the QrReader to not error the app
const QrReader = lazy(() => import('../components/QrReader'))

export default function Scanner() {
    const navigate = useNavigate()
    const { status, requestCamera } = useCamera()
    const hasScanned = useRef(false)
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

        if (locationId === "lesson3") {
            navigate("/lesson3");
        } else {
            navigate(`/quiz/${locationId}`);
        }
    }

    // Called by QrReader if the camera fails to start
    function handleError(message) {
        console.error(message)
    }

    // Browser doesnt support camera at all 
    if (status === CAMERA_STATUS.UNSUPPORTED) {
        return (
            <div>
                <h1>Camera Not supported</h1>
                <p>Your browser does not support camera access. try opening the app in Chrome.</p>
            </div>
        )
    }

    // User blocked camera perms
    if(status === CAMERA_STATUS.DENIED) {
        return (
            <div>
                <h1>Camera blocked</h1>
                <p>You've blocked camera access. To fix this, open your browser settings and allow camera access for this site, then refresh.</p>
            </div>
        )
    }

    // Camera perms granted 
    if (status === CAMERA_STATUS.GRANTED) {
        return (
            <div>
                <h1>scan a QR code</h1>
                <p>Point your camera at a QR code to start a lesson.</p>
                <Suspense fallback={<p>Loading scanner...</p>}>
                    <QrReader onResult={handleResult} onError={handleError} />
                </Suspense>
            </div>
        )
    }

    // Default - not asked yet, show the permisson request screen
    return (
        <div>
            <h1>Camera access needed</h1>
            <p>This app needs your camera to scan QR codes at each location.</p>
            <button onClick={requestCamera}>
                {status === CAMERA_STATUS.REQUESTING ? 'Requesting...' : 'Allow Camera'}
            </button>
        </div>
    )
}