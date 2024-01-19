import './App.css';
import {Routes,Route} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
