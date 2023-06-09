import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/weather/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
