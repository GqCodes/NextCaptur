import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Instagramimg = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image src={socialImg} alt='/' className='h-full w-full' layout='responsive' />
      {/* oberlay */}
      <div className='group absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center hover:bg-black/50'>
        <p className='hidden text-gray-300 group-hover:block'>
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default Instagramimg;
