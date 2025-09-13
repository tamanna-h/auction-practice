import React, { useState } from 'react';
import Bids from './Bids';

const Auctions = () => {
  const [bookmark, setBookmark] = useState([]);

   const handleBookmark = (bid) => {
    //  console.log("bookmark clicked", bid);
     setBookmark([...bookmark, bid]);
   };

    return (
      <div className="flex gap-8">
        <div className="overflow-x-auto w-[70%] ">
          <Bids handleBookmark={handleBookmark} />
        </div>

        <div className="w-[30%] p-5 border border-gray-400 rounded-2xl">
          <h1 className="text-2xl font-bold mb-5 pb-4 border-b-1">
            Favorite Items
          </h1>
          <div className="pb-8">
            <p className="text-xl pb-3">No favorites yet</p>
            <p className="text-sm">
              Click the heart icon on any item to add it to your favorites
            </p>
          </div>
          <div className="flex justify-between pt-5 border-t-1">
            <h3>Total bids Amount</h3>
            <p>$0000</p>
          </div>

          
          {bookmark.map((bid) => (
            <div className="flex justify-between items-center pt-6 gap-5">
              <img className="w-[50px] h-[50px]" src={bid.image} alt="" />
              <div className="flex flex-col flex-start">
                <h3 className='text-gray-400'>{bid.title}</h3>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>${bid.currentBidPrice}</span>
                  <span>{bid.bidsCount}</span>
                </div>
              </div>
              <button className=' p-4 cursor-pointer'>x</button>
            </div>
          ))}


        </div>
      </div>
    );
};

export default Auctions;