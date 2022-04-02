import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shope from './components/Shope/Shope';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shope></Shope>}></Route>
        <Route path='/shope' element={ <Shope></Shope> }></Route>
        <Route path='/order' element={ <Order></Order> }></Route>
        <Route path='/inventory' element={ <Inventory></Inventory> }></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      
    </div> 
  );
}

export default App;
