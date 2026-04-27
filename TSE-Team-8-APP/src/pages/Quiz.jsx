// Last Edited by Jakub Radziwon
// Date: 27/04/26

import { useParams } from 'react-router-dom'

export default function Quiz() {
    const { locationId } = useParams()

    const quizzes = {
        "lesson-1": {
            title: "Lesson 1: ",
            questions: [
                {
                    question: "Embedded Systems",
                    options: ["test1", "test2", "test3"],
                    answer: "test3"
                }
            ]
        },
        "lesson-2": {
            title: "Lesson 2: ",
            questions: [
                {
                    question: "Artifical Intelligence",
                    options: ["test1", "test2", "test3"],
                    answer: "test3"
                }
            ]
        },
        "lesson-3": {
            title: "Lesson 3: ",
            questions: [
                {
                    question: "Cyber Security",
                    options: ["test1", "test2", "test3"],
                    answer: "test3"
                }
            ]
        },
        "lesson-4": {
            questions: [
                {
                    question: "Information about Robotics",
                    options: ["test1", "test2", "test3"],
                    answer: "test3"
                }
            ]
        }
    }

    const quiz = quizzes[locationId]

    if (!quiz) {
        return (
            <div>
                <h1>Quiz Not Found</h1>
                <p>No quiz exists for: <strong>{locationId}</strong></p>
            </div>
        )
    }

    return (
        <div>
            <h1>{quiz.title}</h1>

            <p>Lesson ID: <strong>{locationId}</strong></p>

            <hr />

            {quiz.questions.map((q, index) => (
                <div key={index}>
                    <p><strong>{q.question}</strong></p>
                    <ul>
                        {q.options.map((opt, i) => (
                            <li key={i}>{opt}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
