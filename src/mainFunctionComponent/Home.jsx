import React, { useEffect, useState } from 'react'
import Modals from './conponent/Products'
import Cards from './conponent/Cards';

const promise = async () => {
  const res = await fetch("/card.json")
  return res.json();
}

const getPromise = promise();

const Home = ({sendData}) => {
  const [tabs, setTab] = useState("Products")

  const [addCard, setAddCard] = useState([])

  const toggolinge = (tab) => {
    setTab(tab)
  }

  useEffect(()=>{
    sendData(addCard)
  }, [addCard])

  return (
    <div>
      <h1 className='text-5xl font-extrabold text-center'>Premium Digital Tools</h1>
      <p className='text-[#627382] text-center py-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

      {/* name of each tab group should be unique */}
    <div className="tabs tabs-box bg-white  flex justify-center py-5 border-none">
        <input onClick={() => toggolinge("Products")} type="radio" name="my_tabs_1" className={`tab rounded-full w-30 shadow-md ${tabs === "Products" && "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] "}`} aria-label="Products" defaultChecked/>
        <input onClick={() => toggolinge("Cart")} type="radio" name="my_tabs_1" className={`tab rounded-full w-30 shadow-md ${tabs === "Cart" && "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`} aria-label={`Cart (${addCard.length})`}  />
        
    </div>  

      {tabs === "Products" && <Modals Modals = {getPromise} addCard = {addCard} setAddCard = {setAddCard} ></Modals>}
      {tabs === "Cart" && <Cards addCard = {addCard} setAddCard = {setAddCard}></Cards>}
    </div>
  )
}

export default Home
