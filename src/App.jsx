import './App.css';
import Topbar from './components/Topbar';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/Home';
import Signin from './routes/Signin';
import GrpChat from './routes/GrpChat';
const  App = () => {

  return (
  <div className=''>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<Signin/>}/> 
    <Route path='/groupchat' element={<GrpChat/>}/>
  </Routes>
  </div>
  )
}

export default App
