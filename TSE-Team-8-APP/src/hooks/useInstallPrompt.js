import { useState, useEffect } from 'react'

export default function useInstallPrompt() {
    const [installPrompt, setInstallPrompt] = useState(null)
    const [ isInstalled, setIsInstalled] = useState(false)

    useEffect(() => {
        // Check if already installed 
        if (window.matchMedia('(display-mode: standalone)').matches)
    {
            setIsInstalled(true)
        }

        // Capture install prompt event before browser shows it
        function handleBeforeInstallPrompt(e) {
            e.preventDefault() // stop browser showing prompt automatically
            setInstallPrompt(e) // save it so it can be triggered via button
        }

        // Detect when app is successfully installed
        function handleAppInstalled() {
            setIsInstalled(true)
            setInstallPrompt(null)
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
        window.addEventListener('appinstalled', handleAppInstalled)

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
            window.removeEventListener('appinstalled', handleAppInstalled)
        }
    }, [])

    // Call function when user clicks install
    async function triggerInstall() {
        if (!installPrompt) return
        await installPrompt.prompt()
        const result = await installPrompt.userChoice
        if (result.outcome === 'accepted') {
            setInstallPrompt(null)
        }
    }

    return { installPrompt, isInstalled, triggerInstall }
}