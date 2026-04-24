import {BrowserRout, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Scanner from './pages/scanner'
import Quiz from './pages/quiz'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>

            {/* Landing page */}
            <Route path="/" element={<home />} />

            {/* Scanner page */}
            <Route path="/scan" element   ={<scanner />} /> 

            {/* Quiz page */}
            <Route path="/quiz/:locationId" element={<Quiz />} />

            {/* Catch-all and redirects to home page */}
            <Route path="*" element={<Navigate to="/" replace /> } />

            </Routes>    
        </BrowserRouter>
    )
}