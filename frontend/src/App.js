import "./App.css";
import Home from "./views/home/Home";
import SignUp from "./views/LoginSignup/Signup";
import Login from "./views/LoginSignup/Login";
import PrivateRoute from "./contexts/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";
import UpdateProfile from "./views/LoginSignup/UpdateProfile";
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
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/update-profile' element={<UpdateProfile />} />
            </Route>
            {/* <Route path='/forgot-password' element={ForgotPassword} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
