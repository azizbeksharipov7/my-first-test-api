import { Rating } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'

const ProductCard = () => {
    const [data, setData] = useState([]);
    async function fetchData() {
        return await fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((json) => setData(json));
    }

    console.log(data);

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='container grid grid-cols-3 grid-rows-4  '>
            {data.map((el) => (
                <div key={el.id} className=' border rounded-tl-[50px] relative border-gray-300 mt-12 px-3 py-2 mx-auto gap-3 w-[360px]  h-[446px]'>
                    <div className='w-[340px] mx-auto overflow-hidden h-[264px] ' >
                        <img src={el.image} className='flex w-full h-full object-contain ' alt={el.title} />
                    </div>
                    <div className='gap-1'>
                        <div className='flex justify-between mt-2'>
                            <h2 className='font-bold text-[17px] line-clamp-1'>{el.title}</h2>
                            <p className='font-bold text-[17px]'>{el.price}$</p>
                        </div>
                        <p className='font-normal text-[16px] mt-3 line-clamp-2'>{el.description}</p>
                    </div>
                    <div>
                        <button className='bg-orange-500 py-2 px-3 mt-3 rounded text-white text-[12px]'>+</button>
                        
                        
                    </div>
                </div>

            ))
            }
        </div>
    )
}

export default ProductCard