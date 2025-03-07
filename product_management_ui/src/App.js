import './App.css';
import AddProduct from './component/AddProduct';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route, Routes} from 'react-router-dom';
import UpdateProduct from './component/UpdateProduct';
import Error from './component/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;