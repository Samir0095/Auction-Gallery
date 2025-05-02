import React, { useEffect, useState } from "react";
import { GoHeart, GoX } from "react-icons/go";

const Items = () => {
  const [favorite, setFavorite] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleFavorite = (item) => {
    if (!favorite.find((fav) => fav.id === item.id)) {
      setFavorite([...favorite, item]);
    }
  };

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorite.filter((item) => item.id !== id);
    setFavorite(updatedFavorites);
  };

  return (
    <div className="flex">
      {/* LEFT SIDE */}
      <div className="left">
        <div className="all-items bg-white w-4xl h-[993px] rounded-3xl">
          <div className="titles flex text-2xl justify-between">
            <div className="left-titles m-6">
              <p>Items</p>
            </div>
            <div className="right-titles flex gap-16 p-6">
              <p>Current Bid</p>
              <p>Time Left</p>
              <p>Bid Now</p>
            </div>
          </div>
          <div className="dynamic-items">
            {items.map((item) => (
              <div
                key={item.id}
                className="item-entry m-4 p-4 border rounded-xl flex items-center gap-5 justify-between"
              >
                <div className="imgTitle flex items-center">
                  <img
                    src={item.image}
                    alt={`Item ${item.id}`}
                    className="w-24 h-auto rounded"
                  />
                  <p>{item.title}</p>
                </div>

                <div className="bidTime flex p-4 pr-7">
                  <p className="mr-36">{item.currentBidPrice}</p>
                  <p className="mr-28">{item.timeLeft}</p>
                  <GoHeart
  onClick={() => handleFavorite(item)}
  className={`cursor-pointer ${
    favorite.find((fav) => fav.id === item.id)
      ? "text-red-500 pointer-events-none opacity-50"
      : ""
  }`}
/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="flex flex-col items-start p-4 gap-2 bg-white w-[456px] h-auto ml-5 rounded-3xl">
          <div className="flex items-center gap-2 mb-2">
            <GoHeart className="text-2xl ml-27" />
            <p className="font-medium text-3xl">Favorite Items</p>
          </div>

          {favorite.length === 0 ? (
            <div className="flex flex-col items-center w-full h-96 text-center">
              <hr className="w-full border-t-2 border-black my-4" />
              <p className="text-gray-500 font-medium text-3xl mt-24 mb-6">
                No favorites yet
              </p>
              <p>
                Click the heart icon on any item <br /> to add it to your
                favorites
              </p>
              <hr className="w-full border-t-2 border-black my-4 mt-10" />
            </div>
          ) : (
            <div className="flex flex-col items-center w-full text-center">
              <hr className="w-full border-t-2 border-black my-4" />
              {favorite.map((marked) => (
                <div
                  key={marked.id}
                  className="imgTitle flex items-center justify-between w-full mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={marked.image}
                      alt={`Item ${marked.id}`}
                      className="w-24 h-auto rounded"
                    />
                    <div>
                      <p className="font-medium text-xl">{marked.title}</p>
                      <div className="flex">
                        <p className="mx-4">${marked.currentBidPrice}</p>
                        <p className="mx-2">Bid: {marked.bidsCount}</p>
                      </div>
                    </div>
                  </div>
                  <GoX
                    onClick={() => handleRemoveFavorite(marked.id)}
                    className="text-xl text-red-500 cursor-pointer hover:scale-110 transition-transform duration-200"
                    title="Remove from favorites"
                  />
                </div>
              ))}
              <hr className="w-full border-t-2 border-black my-4 mt-10" />
            </div>
          )}

          {/* Total Bid Amount */}
          <div className="flex justify-between w-full px-2 mt-4">
            <p className="text-2xl font-medium">Total bids Amount :</p>
            <p className="text-2xl font-bold">
              ${favorite.reduce((sum, item) => sum + item.currentBidPrice, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
