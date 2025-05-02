import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import NavBar from './components/NavBar/NavBar'
function App() {

  

  return (
    <>
      <NavBar></NavBar>
      
      <Banner></Banner>

      <div className="main-container flex  p-36 text-black bg-gray-100 ">
        <div className="left-container w-[80%]  flex flex-col gap-2"> 
          <p className='text-3xl font-medium ' style={{ color: '#0E2954' }}>Active Auctions</p>
          <p className='text-sm '>Discover and bid on extraordinary items</p>
          <div className="items flex flex-col">
           
            <Items>
             
            </Items>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
