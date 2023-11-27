'use client'

import React, { useState } from 'react';
import Carousel from './Carousel';

const GiftCards = () => {
  const [currentValue, setCurrentValue] = useState('R$ 25,00')
  const giftCards = [
    '/card25.png',
    '/card35.png',
    '/card50.png',
    '/card75.png',
    '/card100.png',
    '/card150.png',
  ];

  const cardsValues = [
    'R$ 25.00',
    'R$ 35.00',
    'R$ 50.00',
    'R$ 75.00',
    'R$ 100.00',
    'R$ 150.00',
  ]

  const handleWhatsAppClick = () => {
    const messageMap = {
      25: 'https://w.app/naturajac25',
      35: 'https://w.app/naturajac35',
      50: 'https://w.app/naturajac50',
      75: 'https://w.app/naturajac75',
      100: 'https://w.app/naturajac100',
      150: 'https://w.app/naturajac150'
    }

    window.location.href = messageMap[currentValue];
  };

  return (
    <div className=" flex lg:flex-row flex-col w-full justify-center my-10">
      <Carousel>
        {giftCards.map((card) => (
          <img key={card} src={card}/>
        ))}
      </Carousel>
      <div className='px-20 pt-10 flex flex-col items-start justify-between'>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Cartões Presente</h1>
          <p className='pt-2 font-normal text-gray-500'><u>Consultora Jacqueline Caldas</u></p>
        </div>
        <div>
          <p className='font-semibold text-md'>Denominações</p>
          <div className='flex flex-col md:flex-row'>
            {cardsValues.map((value) => (
              <div
                onClick={() => setCurrentValue(value)}
                key={value}
                className={`
                  rounded-md border ${currentValue === value ? 'border-orange-500 bg-orange-500' :  'border-gray-950'} p-2 items-center justify-center 
                  m-2 flex cursor-pointer
                `}
              >
                <p className={`font-medium ${currentValue === value ? 'text-white' : 'text-neutral-900'}`}>{value}</p>
              </div>  
            ))}
          </div>
        </div>
        <div>
          <p className='font-semibold text-md'>Preço</p>
          <p className='font-semibold text-lg pt-2'>{currentValue}</p>
        </div>
        <div>
          <p className='font-bold text-orange-400'>OBS: Cartões válidos para qualquer produto natura comprados com a consultora!</p>
        </div>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-600"
          onClick={handleWhatsAppClick}
        >
          Adquirir via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default GiftCards;
