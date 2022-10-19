import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path="/" elements={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
