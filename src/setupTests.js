import React from 'react'
import {render, screen} from '@testing-library/react'
import Home from './Home'

test('renders Home route with start quiz game image', () => {
  render(<Home />)

  const startQuizImage = screen.getByAltText(/start quiz game/i)
  expect(startQuizImage).toBeInTheDocument()
  expect(startQuizImage).toHaveAttribute(
    'src',
    'https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png',
  )
})
