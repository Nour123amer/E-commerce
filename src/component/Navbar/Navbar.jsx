import React, { useContext, useEffect } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { userContext } from '../../Context/User.context'
import { cartContext } from '../../Context/Cart.context';
export default function Navbar() {
    const {token,logOut} = useContext(userContext);
    const {getCartInfo ,cartInfo} =useContext(cartContext);

    useEffect(()=>{
        getCartInfo();
    },[])
  return (
   <>
   <nav className='bg-slate-300 p-3 fixed top-0 left-0 right-0 z-50'>
    <div className="container flex gap-8 ">
        <h1>
        <a href="/">
            <img src={logo} alt="" />
        </a>
        </h1>

       {token?
     <ul className='flex gap-6 items-center'>
     <li><NavLink className={(isActive)=>{
         return `relative before:w-0 before:h-[2px] hover:before:w-full 
         hover:before:font-bold before:transition-[width] before:duration-300
          before:bg-primary before:absolute before:left-0 before:-bottom-1
           ${isActive?"border-4":""}
         isActive ? "font-bold before:w-full":"before:w-0"
     }`
     }} to="/">Home</NavLink></li>

     <li><NavLink className={(isActive)=>{
         return `relative before:w-0 before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive?"border-4":""}`}} to="/products">Products</NavLink></li>
     <li><NavLink className={(isActive)=>{
         return `relative before:w-0 before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive?"border-4":""}`}} to="/categories">Categories</NavLink></li>
     <li><NavLink  className={(isActive)=>{
         return `relative before:w-0 before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive?"border-4":""}`}} to="/brands">Brands</NavLink></li>
    
 </ul>   :""
    }

    <Link to={"/cart"} className='ms-auto relative'>
        <i className='fa-solid fa-cart-shopping text-lg'></i>
        <span className='bg-primary w-6 h-6 text-sm font-bold text-white flex
         justify-center items-center rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'>
          {/* {cartInfo===null?( <i className='fa-solid fa-spinner fa-spin'> </i>) :(
            cartInfo.numOfCartItems || 0)
          } */}
         </span>
    </Link >
        
        <ul className='flex gap-6 items-center ms-auto'>
            <li>
                <a href="https://www.facebook.com">
                <i className='fa-brands fa-facebook'></i>
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com">
                <i className='fa-brands fa-twitter'></i>
                </a>
                </li>
                <li>
                <a href="https://www.tiktok.com">
                <i className='fa-brands fa-tiktok'></i>
                </a>
                </li>
                <li>
                <a href="https://www.youtube.com">
                <i className='fa-brands fa-youtube'></i>
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com">
                <i className='fa-brands fa-instagram'></i>
                </a>
                </li>
           
        </ul>

        <ul className='flex gap-6 items-center'>
            <li>
                <NavLink to ="/auth/login">Login</NavLink>
            </li>
            <li>
                <NavLink to ="/auth/signup">Sign up</NavLink>
            </li>
            <span onClick={logOut}>
            <li>
                <NavLink to =""><i className='fa-solid fa-right-from-bracket text-2xl'></i></NavLink>
            </li>
           </span>
        </ul>

    </div>
   </nav>
   </>
  )
}
