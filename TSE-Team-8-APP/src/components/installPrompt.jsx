import useInstallPrompt from '../hooks/useInstallPrompt'

export default function InstallPrompt() {
    const { installPrompt, isInstalled, triggerInstall } = useInstallPrompt()

    // Already installed - dont show owt
    if (isInstalled) {
        return null
    }

    // Browser doesnt support install prompt
    if (!installPrompt) {
        return (
            <div style={{ marginTop: '16px', fontSize: '14px', color: '#888'}}>
                <p>To install: Tap your browser menu and select "Add to home screen"</p>
            </div>
        )
    }

    // Show the install button
    return (
        <div style={{ marginTop: '16px' }}>
            <button onClick={triggerInstall}>
                Install App
            </button>
            <p style={{ fontsize: '12px', color: '#888', marginTop: '8px' }}>
                Install for offline access and a better experience
            </p>
        </div>
    )
}