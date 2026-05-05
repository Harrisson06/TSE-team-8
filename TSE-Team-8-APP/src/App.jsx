// LAST EDITED BY: LEWIS GORMLEY 
// DATE: 30/04/2026

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Scanner from './pages/Scanner'
import Quiz from './pages/Quiz'
import Lesson1 from './pages/Lesson1'
import Lesson2 from './pages/Lesson2'
import Lesson3 from './pages/Lesson3'
import Lesson4 from './pages/Lesson4'

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

            {/* Lesson 1 page */}
            <Route path="/lesson1" element={<Lesson1 />} />

            {/* Lesson 2 page */}
            <Route path="/lesson2" element={<Lesson2 />} />

            {/* Lesson 3 page */}
            <Route path="/lesson3" element={<Lesson3 />} />

            {/* Lesson 4 page */}
            <Route path="/lesson4" element={<Lesson4 />} />

            {/* Catch-all and redirects to home page */}
            <Route path="*" element={<Navigate to="/" replace /> } />

            </Routes>    
        </BrowserRouter>
    )
}