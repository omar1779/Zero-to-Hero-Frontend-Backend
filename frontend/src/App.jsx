import { useState } from 'react'
import './App.css'
import Users from './components/Users'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="spacer">
        <h1>Mi Primer Frontend en PHP</h1>
        <Users />
      </section>
    </>
  )
}

export default App
