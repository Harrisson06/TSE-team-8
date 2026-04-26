// LAST EDITED BY: HARRISON MACDONALD 
// DATE: 24/04/2026

import { useParams } from 'react-router-dom'

export default function Quiz() {
    const { locationId } = useParams()

    return (
        <div>
            <h1>Quiz</h1>
            <p>Loading lesson: <strong>{locationId}</strong></p>
            <p>Questions will go here.</p>
        </div>
    )
}