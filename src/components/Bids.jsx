import React, { useEffect, useState } from 'react';
import Bid from './Bid';

const Bids = ({handleBookmark,}) => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        fetch('bids.json')
        .then(res => res.json())
        .then(data => setBids(data))

    })

    return (
      <div className="table">
        <ul className="flex justify-start font-bold item-center p-5">
          <li className="w-[50%]">Items</li>
          <li className="w-[20%]">Current Bid</li>
          <li className="w-[20%]">Time Left</li>
          <li>Bid Now</li>
        </ul>
        <div>
          {bids.map((bid) => (
            <Bid
              key={bid.id}
              bid={bid}
              handleBookmark={handleBookmark}
            ></Bid>
          ))}
        </div>
      </div>
    );
};

export default Bids;