import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./Login/LoginPage";
import Register from "./Login/RegisterPage";
import Cart from './Pages/Cart';

function App() {
  const location=useLocation();
  const sholudHidden=location.pathname==="/login"||location.pathname==="/register" || location.pathname.startsWith("/admin") 
  return (
    <div>
      {!sholudHidden&&<Navbar/>}
      <Routes>

      {/* login,register */}
        <Route path="/login" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
