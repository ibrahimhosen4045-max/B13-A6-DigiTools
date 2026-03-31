import React, { useState } from 'react'
import { IoMdCheckmark } from 'react-icons/io'

const ModalsCard = ({item, addCard, setAddCard}) => {
    const [cardBuy, setCardBuy] = useState(false)

    const clickHandle = () => {
        setCardBuy(true)
        const isFound = addCard.find(i => i.id === item.id)
        if(isFound){
          return;
        }
        setAddCard([...addCard, item])
    }

  return (
     <div className=' rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-start gap-4 relative'>
            <img className='p-3 border rounded-full border-gray-200 shadow-sm' src={item.icon} alt="" />
            <div className=' absolute top-2 right-2'>
              {item.tag === "Popular" && <button className='py-1.5 px-3 font-semibold rounded-full text-purple-700 bg-purple-100'>{item.tag}</button>}
              {item.tag === "New" && <button className='py-1.5 px-3 font-semibold rounded-full text-green-700 bg-green-100'>{item.tag}</button>}
              {item.tag === "Best Seller" && <button className='py-1.5 px-3 font-semibold rounded-full text-amber-700 bg-amber-100'>{item.tag}</button>}
            </div>
            <h1>{item.name}</h1>
            <p className='text-[#627382]'>{item.description}</p>
            <div>
              <span className='text-2xl font-bold'>${item.price}</span>
              <span className='text-lg text-[#627382]'>/{item.period}</span>
            </div>
            <div>
              <h2 className='flex  items-center gap-2 text-[#627382]'><IoMdCheckmark className='text-green-500'/> {item.features["0"]}</h2>
              <h2 className='flex  items-center gap-2 text-[#627382]'><IoMdCheckmark className='text-green-500'/> {item.features["1"]}</h2>
              <h2 className='flex  items-center gap-2 text-[#627382]'><IoMdCheckmark className='text-green-500'/> {item.features["2"]}</h2>
            </div>
            {cardBuy ? <button onClick={clickHandle} className='btn w-full rounded-full text-white bg-green-500 flex items-center'><IoMdCheckmark/> Added to card!</button> : <button onClick={clickHandle} className='btn w-full rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Buy Now</button>}
          </div>
  )
}

export default ModalsCard
