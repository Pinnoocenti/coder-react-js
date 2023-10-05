import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>


      </Routes>
    </>
    
    
  );
}

export default App;
