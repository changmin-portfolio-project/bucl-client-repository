import React from 'react'
import './App.css'
import AppRouter from './AppRouter'
import { Reset } from 'styled-reset'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Reset />
      <AppRouter />
    </React.Fragment>
  )
}

export default App
