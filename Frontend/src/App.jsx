import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'

import Header from './Components/Header'
import Home from './Pages/Home'

import Bikes from './Pages/Bikes'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from './Components/Footer'
import WishList from './Pages/WishList'
import AddBikes from './Admin/Admin-Pages/AddBikes';
import ListBikes from './Admin/Admin-Pages/ListBikes';
import Users from './Admin/Users';
import BikeDetails from './Pages/BikeDetails';
import ProtectedRoute from '../utils/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import EditBikes from './Editbikes';




function App() {

  const [wishItems,setWishItems]=useState([]);

  const bikes =[
    {id:1 , bikeName : "activa", bikePrice: 30000 , bikeDescription: "single use" , bikePhoto: "https://imgd.aeplcdn.com/0X0/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80"},
    {id:2 , bikeName : "bullet" , bikePrice: 90000 , bikeDescription: "single use" , bikePhoto: "https://www.webbikeworld.com/wp-content/uploads/2023/09/4Royal-Enfield-Bullet-350.jpg"},
  ]

  return (
    <>
    
    <BrowserRouter>
     <Header wishItems={wishItems}/>
     <ToastContainer position="top-center" autoClose={2000} />
    <Routes>
      <Route  path='/' element={<Home bikes={bikes}  setWishItems={setWishItems} wishItems={wishItems}/>} />
     <Route path='/bikes' element={<Bikes bikes={bikes}/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    
    
    
      <Route path='/admin/addbikes' element={<ProtectedRoute>
     { <AddBikes/>}
      </ProtectedRoute>}/>
  
     
      <Route path='/admin/listbikes' element={<ProtectedRoute>
     { <ListBikes/>}
      </ProtectedRoute>}/>


           <Route path='/admin/users' element={<ProtectedRoute>
     { <Users/>}
      </ProtectedRoute>}/>

   {/* <Route path='/bikedetails/:id' element={<ProtectedRoute>
     { <BikeDetails/>}
      </ProtectedRoute>}/> */}
      <Route path='/bike/:id' element={<BikeDetails/>}/>

 
      <Route path='/admin/edit-bike/:id' element={<ProtectedRoute>
     { <EditBikes/>}
      </ProtectedRoute>}/>


        
     
    </Routes>
    
    
    
    </BrowserRouter>
    <Footer/>
    
    
    
     





     </>
  )
}

export default App
