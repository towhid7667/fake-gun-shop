import React, { useEffect, useState } from 'react';
import SingleGun from '../singleGun/singleGun';

const Allgun = () => {
    const [guns, setGuns] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    }, []);

    return (
         
        <div>
          <div className='my-10'>
            <h1 className='text-center text-2xl font-bold mt-10'>Welcome TO Gun Shop</h1>
            <p className='text-center text-1xl font-semibold w-10/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus neque magnam laudantium laborum cum inventore repellat a dignissimos ducimus!</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-[90%] mx-auto'>

            {guns.map((gun) => (
          <SingleGun gun={gun}/>
        ))}
        </div>
        </div>
    )

}

export default Allgun;