import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';
import Loading from "../../component/Loading/Loading";


export default function CategorySlider() {
    const[categories , setCategories]= useState(null);
    const options={
        url:'https://ecommerce.routemisr.com/api/v1/categories',
        method:"GET",
    }
    async function getCategories(){
        const {data} = await axios.request(options);
        setCategories(data.data)
    }

    useEffect(()=>{
        getCategories();
    },[])
  return (
    <>
 {categories?<section className='py-8'>
 
        <h2 className='font-semibold text-lg mb-3'>Shop Popular Categories</h2>
        <Swiper-container loop={true} slides-per-view={6}>
            {categories.map((category)=> <swiper-slider key={category._id}>
             <Link to={`/category/${category._id}`}>
             <img src={category.image} className='w-full h-72 object-cover' alt="" />
                <h3>{category.name}</h3>
             </Link>
            </swiper-slider>)}
        </Swiper-container>
        </section> : <Loading />
}
    </>
  )
}
