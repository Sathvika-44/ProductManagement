import './App.css';
import AddProduct from './component/AddProduct';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import UpdateProduct from './component/UpdateProduct';
import Error from './component/Error';
import { SearchProvider } from './component/SearchContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/updateProduct/:id' element={<UpdateProduct />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;