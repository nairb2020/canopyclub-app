import LandingPage from "./views/landing_page/LandingPage";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./views/LoginSignup/Signup";
import Login from "./views/LoginSignup/Login";
import PrivateRoute from "./contexts/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";
import UpdateProfile from "./views/LoginSignup/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
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
    </ThemeProvider>
  );
}

export default App;
