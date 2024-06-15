import React, { useContext } from 'react'
import { cartContext } from '../../Context/Cart.context';

export default function ProductCard({productInfo}) {
    const {images, title ,price ,category ,ratingsAverage,id}=productInfo;
    const {addProductToCart} = useContext(cartContext);
  return (
   <>
    <Link to={`/product/${id}`} className='col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-2  shadow-lg rounded-md overflow-hidden' >
    <div>
    <img src="" alt="" className='w=full' />
    <div className="layer opacity-0 hover:opacity-100 transition-opacity duration-300 absolute w-full h-full left-0 right-0 top-0 bg-black bg-opacity-15 flex gap-2 justify-center items-center">
        <div className="icon cursor-pointer hover:scale-110 hover:rotate-6  w-10 h-10 rounded-full bg-primary text-sm text-whte flex justify-center items-center">
            <i className='fa-solid fa-heart '></i>
        </div>
        <div
        onClick={()=>{addProductToCart({id})}}
        className="icon cursor-pointer  w-10 h-10 rounded-full bg-primary text-sm text-whte flex justify-center items-center">
            <i className='fa-solid fa-cart-shopping '></i>
        </div>
        <Link to={`/product/${id}`} className="icon cursor-pointer  w-10 h-10 rounded-full bg-primary text-sm text-whte flex justify-center items-center">
            <i className='fa-solid fa-eye '></i>
        </Link >
    </div>
    </div>
      <div>
        <h3>{category.name}</h3>
        <h2 className='text-lg font-semibold lime-clamp-2'>{title}</h2>
        <div className='flex items-center justify-between'>
            <span>{price} l.e</span>
            <div className='flx gap-1 items-center'>
                <i className='fa-solid fa-star text-yellow-500'></i>
                <span>{ratingsAverage}</span>
            </div>
        </div>
      </div>
      </Link>
   </>
  )
}
