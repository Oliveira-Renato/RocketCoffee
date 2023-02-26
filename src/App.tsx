import { useState } from 'react'

import {Home} from './pages/Home'

import './styles/global.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
