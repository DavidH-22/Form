import { useState } from 'react'
import './index.css'
import Login from './login/Login.jsx'
import FormTable from './table/FormTable.jsx'
import {Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/form" element={<Login />} />
      <Route path="/" element={<FormTable />} />
    </Routes>
    </>
  )
}

export default App;
