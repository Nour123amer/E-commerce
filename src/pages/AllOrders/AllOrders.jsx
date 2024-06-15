import React, { useEffect, useState } from 'react'
import { userContext } from '../../Context/User.context';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
export default function AllOrders() {
    const[orders,setOrders]=useState(null);
    const {token} = useContext(userContext);
    const {id} = jwtDecode(token);
    console.log(id);
    async function getUserOrders(){
        const options={
            url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            method:"GET",
        };
        const {data} =await axios.request(options);
        setOrders(data);
    }

    useEffect(()=>{
        getUserOrders();
    },[])
  return (
  <>
 {
    !orders? (<Loading />):(

 orders.map((order)=>(
    <div className='order mt-4 border border-gray-400 rounded p-4'>
    <div className='flex justify-between items-center'>

        <div>
            <h2 className='text-gray-400'>#{order.id}</h2>
            <h3 className='font-bold'>#21578</h3>
        </div>

        <div>
          {
            order.isDelivered ? (
                <span className='btn-primary bg-lime-500 font-cairo inline-block'>تم التوصيل</span>
            ):(
                <span className='btn-primary bg-blue-500 font-cairo inline-block'>قيد التوصيل</span>
            )
          }
            {
                order.isPaid ? (
                    <span className='btn-primary bg-lime-500 font-cairo inline-block'>تم الدفع</span>
                ):(
                    <span className='btn-primary bg-lime-500 font-cairo inline-block'>غير مدفوع </span>
                )
            }
        </div>

    </div>

   {order.cartItems.map((product)=>(
     <div className='grid grid-cols-12 gap-4 mt-5'>
     <div className='product border border-gray-300 rounded p-3 col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2'>
         <img src={product.product.imageCover} className='w-full h-32 object-contain '/>
         <h3 className='font-semibold my-2'>{product.product.title}</h3>
<span>{product.price}</span>
     </div>
 </div>
   ))}
  </div>

 ))

    )
 }
  </>
  )
}
