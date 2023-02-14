import logo from './logo.svg';
import './App.css';
import Header from './screens/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './screens/Register';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>   
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
