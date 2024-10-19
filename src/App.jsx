import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import  Home  from './pages/Home'
import Product  from './pages/Product'
import RootLayout from './pages/RootLayout'
import Error from './pages/Error'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout/>} >
      <Route index  element={<Home/>} />
      <Route path='/products' element={<Product/>} />
    </Route>
    <Route path="*" element={<Error />} />
    </Routes>
   </BrowserRouter>
  )
}


export default App



