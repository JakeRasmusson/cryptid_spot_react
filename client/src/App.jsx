import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet />

    </>
  )
}

export default App
