import { toast } from 'react-toastify'
import cards from '../../assets/cards.png'
const Cards = ({addCard, setAddCard}) => {

  const total = addCard.reduce((sum, item) => sum + item.price , 0)

  const checkout = () => {
    setAddCard([])
    toast.success("All card Checkout!")
  }

  const handleDelet = (item) => {
    const delet = addCard.filter(c => c.id !== item.id)
    setAddCard(delet)
    toast.success("Deleted this item!")
  }
  
  return (
    <div className="container mx-auto border border-gray-100 mb-10 mt-5 rounded-2xl shadow-lg">
      <h1 className="font-bold text-xl p-3">Your Card</h1>
      {addCard.length === 0 ? (<div className="w-full h-[27.5rem] flex flex-col gap-2 justify-center items-center text-xl"><img className='w-10' src={cards} alt="" /> Your card is empty!</div>) :
      <div className='px-4 pb-4'>
        {addCard.map(item => 
        <div className="flex items-center justify-between rounded-2xl bg-[#F9FAFC] p-5.5 my-4">
          <div className="flex items-center gap-3">
            <img className="p-3 border rounded-full border-gray-200 shadow-sm bg-white" src={item.icon} alt="" />
            <div>
              <h1 className="text-[20px] font-semibold">{item.name}</h1>
              <p>${item.price}</p>
            </div>
          </div>
          <button onClick={() => handleDelet(item)} className="btn border-none text-red-500  ">Remove</button>
        </div>
      )}
      <div className="flex justify-between items-center py-4">
        <p>Total:</p>
        <h1 className="text-2xl font-bold">${total}</h1>
      </div>
      <button onClick={checkout} className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed to Checkout</button>
      </div>
      }
      
    </div>
  )
}

export default Cards
