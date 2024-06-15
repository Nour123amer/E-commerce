// import React, { useState,useEffect } from 'react'
// import Loading from '../../component/Loading/Loading';
// import { userContext } from '../../Context/User.context';
// import { jwtDecode } from 'jwt-decode';
// import { useContext } from 'react';
// export default function Categories() {
//     const [brands, setBrand] = useState(null);
//     const {token} = useContext(userContext);
//     const {id} = jwtDecode(token);

//     async function getBrandDetails({id}){

//     const options={
// url:`https://ecommerce.routemisr.com/api/v1/brands/${id}`,
// method:"GET",

//     }
// let {data} = await axios.request(options);
// setBrand(data);

//     }

//     useEffect(() => {
//         getBrandDetails(id);
//       }, []);

      
//   return (
//    <>
//    {!brands?<Loading />:
//    brands.map((brand)=>(
//     <div className="grid grid-col-12 gap-6">
// <div className="card col-span-4 border border-gray-400 rounded p-4">
//     <img src={brands.image} className='w-full mb-2' />
//     <h2 className='text-center '>{brands.name}</h2>
// </div>
//    </div>
//    ))
//    }
//    </>
//   )
// }


/**********************************************************/


import axios from "axios";
import React, { useState,useEffect } from "react";
import Loading from '../../component/Loading/Loading';
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function brands() {
    const [brands, setBrands] = useState(null);

    async function getAllBrands() {
        const loadingID = toast.loading("loading...");
        const { data } = await axios.get(
            "https://ecommerce.routemisr.com/api/v1/brands"
        );
        setBrands(data.data)
        toast.dismiss(loadingID);
        return data
    }

    useEffect(()=>{
        getAllBrands();
    },[])



    return (
     
        
              
                   


        <>
         <Helmet>
            <title>Brands</title>
        </Helmet> 
        {
           !brands? (<Loading />):(
        brands.map((brand)=>(
           <div className='brand mt-4'>
           <div className='grid grid-cols-12 md:col-span-4 lg:col-span-3 gap-10 pt-10'>

          
       
            <div className='grid md:col-span-4 lg:col-span-3 gap-4 mt-5 '>
            <div className='product border border-gray-300 rounded col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 shadow-lg hover:shadow-green-700/50 cursor-pointer     
       '>
                <img src={brand.image} className='w-full h-32 object-contain '/>
                <h3 className='font-semibold my-2'>{brand.name}</h3>
       </div>
            </div>
        </div>

        
         

          
         </div>
       
        ))
       
           )
        }
         </>
    
)
}