import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './components/signin.js'
import Signup from './components/signup.js'
import Cart from './components/cart.js'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
