import './App.css'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

function App() {

  return (
   <>
    <Header/>
    <LeftNav/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>

        
        <Route path='/Dasshboard' element={<Dashboard/>} />
        <Route path='/History' element={<History/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
