import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
// import About from "./components/About";
import Favourite from "./components/Favourite";
import Register from "./components/Register";
// import Register from "./components/Login";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Login from "./components/Login";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
