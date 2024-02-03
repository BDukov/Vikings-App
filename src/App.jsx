import './App.css'
import { Routes, Route } from 'react-router-dom';
import Welcome from './containers/main/Welcome/Welcome.jsx';
import Home from './containers/main/Home/Home.jsx'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/home" element={<Home/>}></Route>
    </Routes> 



  )
}

export default App
