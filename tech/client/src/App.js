import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import NotFoundPage from './NotFoundPage.js';
import MainPage from './MainPage.js';
import Sidebar from './Sidebar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/dashboard' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
