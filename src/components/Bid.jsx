import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Bid = ({ bid, handleBookmark }) => {

    const { title, currentBidPrice, timeLeft, image } = bid;
    
    return (
      <div>
        <ul className="flex justify-start items-center border-b-1 border-gray-400">
          <li className="flex items-center w-[50%]">
            <img
              className="w-[100px] p-3 rounded-3xl"
              src={image}
              alt="image"
            />
            {title}
          </li>
          <li className="w-[20%]">${currentBidPrice}</li>
        <li className="w-[20%]">{timeLeft}</li>
                
          <li onClick={() => handleBookmark(bid)} className='cursor-pointer'>
            <FaRegHeart />
          </li>
        </ul>
      </div>
    );
};

export default Bid;