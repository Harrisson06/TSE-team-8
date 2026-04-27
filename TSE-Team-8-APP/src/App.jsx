// LAST EDITED BY: QUINN CARR 
// DATE: 27/04/2026

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Scanner from './pages/Scanner'
import Quiz from './pages/Quiz'
import Lesson3 from './pages/Lesson3'

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

            {/* Lesson 3 page */}
            <Route path="/lesson3" element={<Lesson3 />} />

            {/* Catch-all and redirects to home page */}
            <Route path="*" element={<Navigate to="/" replace /> } />

            </Routes>    
        </BrowserRouter>
    )
}