import { useState } from 'react'
import './App.css'
import Navigator from './components/Navigator'
import { Routes, Route } from "react-router-dom"
import React from 'react'
import Form from './pages/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigator />
      <h1>React Posts Project</h1>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
