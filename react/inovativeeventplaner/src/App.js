import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./components/Register";
import Home from "./components/Home";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import DestinationDetail from "./components/DestinationDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container sx={{
        minHeight: '78vh',
      }} >
        <Routes>
          <Route path="/" element={<Home/>}>
            
          </Route>
          <Route path="/destination" element={<DestinationDetail/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
