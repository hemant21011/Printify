import React from 'react';
import Cards from './Cards';

const CardSection = () => {
  const cardData = [
    {
      image: 'https://printify.com/pfh/assets/resources/rockstars.jpg',
      title: 'POD Rockstars',
      description: '25k in our community of sellers',
      link: '#',
    },
    {
      image: 'https://printify.com/pfh/assets/resources/youtube.jpg',
      title: 'Printify YouTube',
      description: '100k subscribers on the channel to learn POD',
      link: '#',
    },
    {
      image: 'https://printify.com/pfh/assets/resources/amplified.jpg',
      title: 'Amplified',
      description: '50k attendees at our online and in-person events',
      link: '#',
    },
    {
      image: 'https://printify.com/pfh/assets/resources/printing-profits.jpg',
      title: 'Global Reach',
      description: 'We deliver globally, reaching every corner of the world.',
      link: '#',
    },
    {
      image: 'https://printify.com/pfh/assets/resources/mentorship.jpg',
      title: 'Support',
      description: '24/7 dedicated customer support for all.',
      link: '#',
    },
    {
      image: 'https://printify.com/pfh/assets/resources/learning.png',
      title: 'Innovation',
      description: 'We continuously innovate to enhance the user experience.',
      link: '#',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className='mx-auto mb-8 flex justify-center items-center'>
        <h2 className="text-5xl font-extrabold text-black text-center mb-10 max-w-3xl px-4">
          Everything you need to start your own online business
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
