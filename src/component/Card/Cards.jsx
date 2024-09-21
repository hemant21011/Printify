import React from 'react';

const Cards = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow">
        <h2 className="text-lg text-gray-700 mb-2 font-semibold">{title}</h2>
        <p className="text-black font-bold text-xl mb-4">{description}</p>
        <a 
          href={link} 
          className="text-green-500 underline font-medium transition duration-200"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Cards;
