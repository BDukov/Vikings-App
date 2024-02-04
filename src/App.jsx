import './App.css'
import { Routes, Route } from 'react-router-dom';
import Welcome from './containers/main/Welcome/Welcome.jsx';
import Home from './containers/main/Home/Home.jsx'
import Login from './containers/user/Login/Login';


function App() {


  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/home" element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes> 



  )
}

export default App
