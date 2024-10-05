import './App.css'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
   <>
    
    <BrowserRouter>
        <Header/>
        <LeftNav/> 
      <Routes>
        <Route path='/Signup' element={<Signup/>} />    
        <Route path='/Login' element={<Login/>} />    
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/History' element={<History/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
