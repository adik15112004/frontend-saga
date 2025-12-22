import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fasilitas from "./pages/Fasilitas";
import Forum from "./pages/Forum";
import TentangKami from "./pages/TentangKami";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;