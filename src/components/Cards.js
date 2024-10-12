import React from "react";

const Cards = () => {
  return (
    <div className="relative flex overflow-x-scroll space-x-4 no-scrollbar">
      {/* Car Card 1 */}
      <div className="min-w-[280px] max-w-[300px] bg-white rounded-lg p-4 shadow-lg flex-shrink-0">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">Koenigsegg</h2>
          <div className="text-red-500">❤️</div>
        </div>
        <p className="text-gray-500">Sport</p>
        <img
          className="w-full h-40 object-cover mt-4"
          src="car-image-url.jpg"
          alt="Koenigsegg"
        />
        <div className="flex justify-between text-gray-600 mt-4">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">$99.00 / day</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md">
            Rental Now
          </button>
        </div>
      </div>
      <div className="min-w-[280px] max-w-[300px] bg-white rounded-lg p-4 shadow-lg flex-shrink-0">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">Koenigsegg</h2>
          <div className="text-red-500">❤️</div>
        </div>
        <p className="text-gray-500">Sport</p>
        <img
          className="w-full h-40 object-cover mt-4"
          src="car-image-url.jpg"
          alt="Koenigsegg"
        />
        <div className="flex justify-between text-gray-600 mt-4">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">$99.00 / day</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md">
            Rental Now
          </button>
        </div>
      </div>
      <div className="min-w-[280px] max-w-[300px] bg-white rounded-lg p-4 shadow-lg flex-shrink-0">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">Koenigsegg</h2>
          <div className="text-red-500">❤️</div>
        </div>
        <p className="text-gray-500">Sport</p>
        <img
          className="w-full h-40 object-cover mt-4"
          src="car-image-url.jpg"
          alt="Koenigsegg"
        />
        <div className="flex justify-between text-gray-600 mt-4">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">$99.00 / day</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md">
            Rental Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
