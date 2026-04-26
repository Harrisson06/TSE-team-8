# TSE Team 8 — QR Learning App

A Progressive Web App (PWA) that allows users to scan QR codes at physical locations and complete location-based quizzes and lessons.

**Live App:** [chic-blini-14e915.netlify.app](https://chic-blini-14e915.netlify.app)

---

## Overview

Users visit the app, install it to their home screen, and then scan QR codes placed at various locations. Each QR code redirects the user to a quiz tied to that location. Progress is saved locally on the device so the app works fully offline once installed.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React + Vite | UI framework and build tool |
| JSX | Component syntax |
| react-router-dom | Page routing |
| @zxing/library | QR code decoding |
| vite-plugin-pwa | Service worker and PWA manifest |
| localStorage | Progress persistence |

---

## Getting Started

### Prerequisites
- Node.js (LTS version) — [nodejs.org](https://nodejs.org)
- Git
- Chrome (recommended for development and testing)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Harrisson06/TSE-team-8.git
cd TSE-team-8/TSE-Team-8-APP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open Chrome and visit `http://localhost:5173`

> **Important:** Always run npm commands from inside `TSE-Team-8-APP/`, not the root `TSE-team-8/` folder.
```bash
cd TSE-Team-8-APP
```

### Build for Production
```bash
npm run build
```

---

## File Structure

```
TSE-Team-8-APP/
├── index.html                  # App entry point
├── vite.config.js              # Vite + PWA plugin config
├── manifest.json               # PWA manifest
├── .npmrc                      # npm config for legacy peer deps
├── public/
│   ├── icon-192.png            # PWA homescreen icon
│   └── icon-512.png            # PWA splash screen icon
└── src/
    ├── main.jsx                # React entry, mounts App
    ├── App.jsx                 # Routes: / /scan /quiz/:locationId
    ├── index.css               # Global styles
    ├── pages/
    │   ├── Home.jsx            # Landing page, install prompt, progress
    │   ├── Scanner.jsx         # Camera page, QR decode, redirect
    │   └── Quiz.jsx            # Quiz page, loads questions by locationId
    ├── components/
    │   ├── QrReader.jsx        # Camera viewfinder + QR decode
    │   ├── ScanOverlay.jsx     # Targeting frame overlay
    │   ├── PermissionGate.jsx  # Camera permission request UI
    │   ├── ScanResult.jsx      # Decode feedback
    │   ├── QuestionCard.jsx    # Question text display
    │   ├── AnswerOption.jsx    # Selectable answer button
    │   ├── ResultScreen.jsx    # Correct/wrong feedback
    │   ├── ScoreSummary.jsx    # End of all lessons summary
    │   ├── ProgressBar.jsx     # Lessons completed bar
    │   ├── LocationBadge.jsx   # Location name + status pill
    │   ├── Button.jsx          # Reusable button component
    │   └── InstallPrompt.jsx   # PWA install banner
    ├── hooks/
    │   ├── useCamera.js        # Camera permission + stream
    │   ├── useProgress.js      # localStorage progress tracking
    │   └── useInstallPrompt.js # PWA install event capture
    └── data/
        ├── questions.json      # Quiz content keyed by locationId
        └── locations.js        # Location metadata
```

---

## API Documentation
blank for now 

### useCamera
Manages camera permission and stream lifecycle.

```js
import useCamera, { CAMERA_STATUS } from '../hooks/useCamera'

const { status, requestCamera } = useCamera()
// status: 'idle' | 'requesting' | 'granted' | 'denied' | 'unsupported'
// requestCamera(): asks the user for camera permission
```

### useProgress
Reads and writes lesson completion state to localStorage.

```js
import useProgress from '../hooks/useProgress'

const {
  progress,        // object keyed by locationId
  completeLesson,  // completeLesson(locationId, score, total)
  resetProgress,   // wipes all saved progress
  completedCount,  // number of completed lessons
  totalCount,      // total number of lessons
  allComplete      // true when all lessons are done
} = useProgress(locationIds)
```

**Example — marking a lesson complete:**
```js
completeLesson('lesson-1', 4, 5) // scored 4 out of 5
```

### useInstallPrompt
Captures the PWA install event so it can be triggered from a button.

```js
import useInstallPrompt from '../hooks/useInstallPrompt'

const { installPrompt, isInstalled, triggerInstall } = useInstallPrompt()
// installPrompt: the captured event (null if not available)
// isInstalled: true if already installed as PWA
// triggerInstall(): shows the native install dialog
```

---

## QR Code Format

Each QR code encodes a full URL pointing to a specific lesson:

```
https://chic-blini-14e915.netlify.app/quiz/lesson-1
https://chic-blini-14e915.netlify.app/quiz/lesson-2
```

The `locationId` (e.g. `lesson-1`) is extracted from the URL and used to look up questions in `data/questions.json`.

---

## Adding Quiz Content

Open `src/data/questions.json` and follow this structure:

```json
{
  "lesson-1": {
    "title": "Location Name",
    "questions": [
      {
        "id": 1,
        "question": "Your question here?",
        "options": ["Answer A", "Answer B", "Answer C", "Answer D"],
        "answer": "Answer A",
        "explanation": "Why this answer is correct."
      }
    ]
  }
}
```

Each new location gets a new top-level key matching the locationId in its QR code URL.

---

## Deployment

The app is hosted on Netlify and deploys automatically when changes are pushed to the `main` branch.

**Build settings:**
- Base directory: `TSE-Team-8-APP`
- Build command: `npm run build`
- Publish directory: `TSE-Team-8-APP/dist`

---

## Git Workflow

- `main` — production branch, auto-deploys to Netlify
- `Development` — active development branch
- Always work on `Development` and raise a PR to merge into `main`
- Always run `git pull origin main` before starting work

---

## Team

TSE Team 8 - Team Software Engineering module 
- Jakub R
- Harrison M
- Quinn C
- jakub S
- Lewis G
- Ciaran P