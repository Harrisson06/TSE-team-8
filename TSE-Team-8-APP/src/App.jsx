// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 24/04/2026

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Scanner from './pages/Scanner'
import Quiz from './pages/Quiz'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>

            {/* Landing page */}
            <Route path="/" element={<Home />} />

            {/* Scanner page */}
            <Route path="/scan" element   ={<Scanner />} /> 

            {/* Quiz page */}
            <Route path="/quiz/:locationId" element={<Quiz />} />

            {/* Catch-all and redirects to home page */}
            <Route path="*" element={<Navigate to="/" replace /> } />

            </Routes>    
        </BrowserRouter>
    )
}