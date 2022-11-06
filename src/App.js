import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './pages/layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
