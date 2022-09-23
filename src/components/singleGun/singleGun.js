import React from 'react';

const SingleGun = (props) => {
    console.log(props)
    const { gun, countIncrease } = props;
    const { action, bullet, category, img, name, price } = gun;
    return (
        <div >
            <div className="card w-full h-full bg-base-100 shadow-xl p-5">
  <figure><img src= {img} alt="Shoes" className='w-48 h-44'/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary text-white p-4">{price}$</div>
    </h2>
    <p>{action}</p>
    <p>{category}</p> 
    <p>{bullet}</p> 
    <div className="card-actions justify-end">
      <button className="badge badge-outline p-5  hover:bg-orange-400 font-bold hover:text-white ">See Details</button> 
      <button className="badge badge-outline p-5 hover:bg-orange-400 font-bold hover:text-white" onClick={countIncrease}>Add To Cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleGun;