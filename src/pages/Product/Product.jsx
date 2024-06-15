import React from 'react'
import Loading from '../../component/Loading/Loading';
import { useEffect,useState } from 'react';

export default function Product() {
    const [products, setProducts] = useState(null);

    async function getAllProducts() {
        const loadingID = toast.loading("loading...");
        const { data } = await axios.get(
            "https://ecommerce.routemisr.com/api/v1/products"
        );
        setProducts(data.data)
        toast.dismiss(loadingID);
        return data
    }

    useEffect(()=>{
        getAllProducts();
    },[])


  return (
    <>
    {
        !products ? (<Loading />) :(
            products.map((product)=>(
<div className='grid grid-cols-12'>
    <div className='product border border-gray-300 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-md shadow-lg hover:shadow-green-700/50 cursor-pointer '>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
    </div>
</div>
            
        )
    )

        )
    }
    
    </>
  )

}
