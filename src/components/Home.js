import React from 'react'
import {useNavigate} from 'react'

const Home = ({setQuestions}) => {
  const navigate = useNavigate()

  const handleStartQuiz = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/assess/questions')
      const data = await response.json()
      setQuestions(data.questions)
      navigate('/quiz-game')
    } catch (error) {
      console.error('Error fetching questions', error)
    }
  }

  return (
    <div>
      <h2>Welcome to the Quiz Game</h2>
      <button onClick={handleStartQuiz}>Start Quiz</button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png"
        alt="start quiz game"
      />
    </div>
  )
}

export default Home
