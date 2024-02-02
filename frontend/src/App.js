import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import SignUp from "./components/LoginSignup/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <About />
      <Work />
      <Testimonials />


      
      <ContactUs />
      <Footer /> */}
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    </div>
  );
}

export default App;
