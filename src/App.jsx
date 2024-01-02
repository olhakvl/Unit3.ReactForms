import { useState } from 'react'
import './App.css'
// components
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {

  const [token, setToken] = useState(null);

  return (
    <div>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </div>
  )
}

export default App
