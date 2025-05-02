import React from 'react';
import bannerImage from '../../assets/Banner-min.jpg';

const Banner = () => {

    function MyButton() {
        return (
          <button>
            Explore Auctions
          </button>
        );
      }
      

    return (
        <div className='relative '>
        
        <img src={bannerImage} alt="banner" className="w-full h-auto object-cover scale-x-[-1]" />
        <div className="absolute top-1/2  -translate-y-1/2 text-white">
    <p className="text-5xl font-semibold w-[631px] ml-28 mb-3">Bid on Unique Items from Around the World</p>
    <p className="text-2xl font-light w-[642px] ml-28 mb-3" >Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
    <button className='bg-white-300 w-3xs h-14 ml-28 mb-3 text-2xl text-black bg-amber-50 font-medium rounded-4xl'  onClick={() => alert("Sorry, No Available Auction Right Now")}>
  Click Me
</button>
</div>

</div>

    );
};

export default Banner;
