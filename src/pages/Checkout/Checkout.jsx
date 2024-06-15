import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { cartContext } from '../../Context/Cart.context';
import { userContext } from '../../Context/User.context';
import { useNavigate } from 'react-router-dom';


export default function Checkout() {
    const {cartInfo,setCartInfo} = useContext(cartContext);
    const {token} = useContext(userContext);
    const navigate = useNavigate();
    async function createCashOrder(values){
        const options = {
      url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.data._id}`,
      method :"POST",
      headers:{
        token
      },
      data:{
        values
      }
        };
        let {data} = await axios.request(options);
        setCartInfo([]);
        setTimeout(()=>{

        },)
    }

    async function createOnlineOrder(values){
        const options = {
      url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.data._id}?url=http://localhost:5174`,
      method :"POST",
      headers:{
        token
      },
      data:{
        values
      }
        };
        let {data} = await axios.request(options);
        toast.loading("redirect to payment gateway");

        setTimeout(()=>{
            if(data.status==="success"){
                window.location.href= data.session.url;
            }
        },3000)
    }
    const formik = useFormik({
        initialValues: {
            shippingAddress:{
                details:"",
                phone:"",
                city:"",
            },
        },
        onSubmit: (values)=>{
          if(orderType === cash) createCashOrder(values);
            else createOnlineOrder(values);
        },
    });

  return (
    <>
    <h2 className='text-2xl font-bold mb-5'>Shipping Address</h2>
    <form onSubmit={formik.handleSubmit.shippingAddress.city}>
        <input type="text"
         className='form-control w-full mb-3' 
         placeholder='city'
         name='shippingAddress.city'
         value={formik.handleSubmit.shippingAddress.city}
         onChange={formik.handleChange}
         />
        <input type="tel"
         className='form-control w-full mb-3' 
         placeholder='phone'
         name='shippingAddress.phone'
         value={formik.handleSubmit.shippingAddress.phone}
         />
        <textarea 
        className='form-control w-full mb-3'
         placeholder='details'
         name='shippingAddress.details'
         value={formik.handleSubmit.shippingAddress.details}
         ></textarea>
        <button
         type='submit'
        onClick={()=>{
            setOrderType("cash");
        }}
        className='btn-primary bg-blue-500 mr-4'>Cash Order</button>
        <button
         type='submit'
         onClick={()=>{
            setOrderType("online");
        }}
         className='btn-primary'>Online Order</button>
    </form>
    </>
  )
}
