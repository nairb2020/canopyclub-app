import "./App.css";
import Home from "./views/home/Home";
import SignUp from "./views/LoginSignup/Signup";
import Login from "./views/LoginSignup/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/forgot-password' element={ForgotPassword} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
