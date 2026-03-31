import React, { use } from 'react'
import ModalsCard from './ModalsCard'

const Modals = ({Modals, addCard, setAddCard}) => {
  const data = use(Modals)
  
  return (
    <div>
      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 px-2 lg:px-0'>
        {data.map(item => 
          <ModalsCard key={item.id} item = {item} addCard = {addCard} setAddCard = {setAddCard} ></ModalsCard>
        )}
      </div>
    </div>
  )
}

export default Modals
