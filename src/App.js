import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import SingleProducts from "./Pages/singleProducts";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import Network from "./Pages/Network";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProducts />} />
          <Route path="network" element={<Network />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
