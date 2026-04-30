// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 30/04/2026

// PermissionGate renders the right UI based on cam perm status
// Used by Scanner.jsx to handle each state

import { CAMERA_STATUS } from "../hooks/useCamera"
import './permissionGate.css'

export default function PermissionGate({ status, onRequest, children }) {
    // Browser doesnt support camera at all
    if (status === CAMERA_STATUS.UNSUPPORTED) {
        return (
            <div className="permission-gate">
                <div className="permission-gate__icon">⚠️</div>
                <h2 className="permission-gate__title">Camera not supported</h2>
                <p className="permission-gate__text">
                    Your browser does not support camera access, try opening this app in Chrome.
                </p>
            </div>
        )
    }

    // User blocked camera perms
    if (status === CAMERA_STATUS.DENIED) {
        return (
            <div className="permission-gate">
                <div className="permission-gate__icon">🚫</div>
                <h2 className="permission-gate__title">Camera Blocked</h2>
                <p className="permission-gate__text">
                    You have blocked camera access. To fix this, refresh your browser.
                </p>
            </div>
        )
    }

    // Permission granted | render the scanner
    if (status === CAMERA_STATUS.GRANTED) {
        return children
    }

    // Default | not asked yet or currently requesting
    return (
        <div className="permission-gate">
            <div className="permission-gate__icon">📷</div>
            <h2 className="permission-gate__title">Camera access needed</h2>
            <p className="permission-gate__text">
                This app needs your camera to scan QR codes at each location.
                Your camera feed is never recorded or shared.
            </p>
            <button
            onClick={onRequest}
            disabled={status === CAMERA_STATUS.REQUESTING}
            className="permission-gate__button"
            >
                {status === CAMERA_STATUS.REQUESTING ? 'Requesting...' : 'Allow camera'}
            </button>
        </div>
    )
}
