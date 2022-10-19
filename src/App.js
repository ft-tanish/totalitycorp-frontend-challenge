import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<><Header /> <Home /></>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
