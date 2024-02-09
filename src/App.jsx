import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./containers/main/Welcome/Welcome.jsx";
import Home from "./containers/main/Home/Home.jsx";
import Login from "./containers/user/Login/Login";
import Register from "./containers/user/Register/Register";

import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </AuthContextProvider>
  );
}

export default App;
