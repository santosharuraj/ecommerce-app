import React from 'react'
import Heder from './components/header/Heder'
import Home from './components/Home/Home'
import Cart from './components/cart/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import FullDetailsCard from './components/maindetailscard/FullDetailsCard';

const App = () => {
  return (
    <TemplateProvider>
    <ContextProvider>
      <BrowserRouter>
      <Heder/>
       <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/product/:id' element={<FullDetailsCard />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>


  )
}

export default App
