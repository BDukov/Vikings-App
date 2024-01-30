import './App.css'
import { Routes, Route } from 'react-router-dom';
import Welcome from './containers/main/Home/Welcome.jsx';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      {/* <Route path="home" element={<Home/>}></Route> */}
    </Routes> 



  )
}

export default App
