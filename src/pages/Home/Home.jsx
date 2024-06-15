import React, { useState } from 'react'
import ProductCard from '../../component/ProductCard/ProductCard'

import HomeSlider from '../../component/HomeSlider/HomeSlider';
import CategorySlider from '../../component/CategorySlider/CategorySlider';
import Loading from '../../component/Loading/Loading';

export default function Home() {
    const[products,setProducts]=useState(null);
    async function getProducts(){
        const options= {
            url:"https://ecommerce.routmisr.com/api/v1/products",
            method:"GET",
        }
        const {data} = await axios.request(options);
        setProducts(data.data);
        console.log(data);
    }
  return (
    <>
    <HomeSlider />
    <CategorySlider />
    {products ? (
    <div className='grid grid-cols-12 gap-4'>
        {products.map((product)=>(
 <ProductCard  productInfo={product} key={product._id}/>

        ))}
     
    </div>
    ):(
      <Loading />
    )}
    </>
  )
}
