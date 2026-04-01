
import { IoMdCheckmark } from 'react-icons/io'
import { toast } from 'react-toastify'
import fileImage from '../../assets/products/file.png'

const ProductsCard = ({item, addCard, setAddCard}) => {

    const clickHandle = () => {
        
        const isFound = addCard.find(i => i.id === item.id)
        if(isFound){
          toast.error("This card allrady added")
          return;
        }
        setAddCard([...addCard, item])
        toast.success("Success fully added to card")
    }

    const isAdded = addCard.find(i => i.id === item.id)

  return (
     <div className=' rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-start gap-4 relative transition hover:-translate-y-1 hover:shadow-lg duration-150'>
            <div className='p-3 border w-15 h-15 border-gray-200 shadow-sm rounded-full'>
              <img className='w-full object-contain' src={item.icon} alt={item.name} onError={(e) => e.target.src = fileImage}/>
            </div>
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
              {item.features.map((item, index) => (
                <h1 key={index} className='flex  items-center gap-2 text-[#627382]'><IoMdCheckmark className='text-green-500'/>{item}</h1>
              ))}
            </div>
            <button 
            onClick={clickHandle}
            className={`btn w-full rounded-full text-white flex items-center ${
              isAdded ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
              }`}
            >
              {isAdded ? <><IoMdCheckmark className="mr-1"/> Added to cart!</> : "Buy Now"}
            </button>
          </div>)}

export default ProductsCard
