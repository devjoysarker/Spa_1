

import './App.css';
import Admin from './components/Admin/Admin';
import AddDevs from './components/Admin/AddDevs';
import Profile from './components/Team/Profile/Profile';
import Team from './components/Team/Team';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
function App() {
  return (
  <>

  <BrowserRouter>
  <Header></Header>
   <Routes>
    <Route path='/' element={ <Team></Team> } />
    <Route path='/Profile/:username' element={ <Profile></Profile> } />
    <Route path='/admin/' element={ <Admin></Admin> } />
    <Route path='/add-devs/' element={ <AddDevs></AddDevs> } />
   </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;
