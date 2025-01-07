import { Typography } from '@mui/material';
import React from 'react';

function FuniroFurniture() {
  const itemData = [
    // { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833494/Rectangle_36_ubicki.png',},
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833495/Rectangle_37_ao666l.png', },
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833496/Rectangle_38_zpnhca.png', },
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833496/Rectangle_39_ro1nh6.png', },
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833496/Rectangle_40_jtcybb.png', },
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833497/Rectangle_45_zpoqk3.png', },
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833497/Rectangle_43_czhfaa.png', },
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833495/Rectangle_44_ru0f8c.png', },
    { img: 'https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735833494/Rectangle_41_ao2mh6.png', },


  ];

  return (
    <>
      <div className='text-center mt-3 mb-3'>
        <Typography variant='body1' gutterBottom className='text-center !font-bold text-[#616161]'>Share your setup with</Typography>
        <Typography variant='h4' className='text-center !font-black'>#FuniroFurniture</Typography>
      </div>
      <div className="columns-2 sm:columns-3 lg:columns-5  h-full  gap-3">
        {/* Tailwind-based Masonry Grid */}
        {itemData.map((item, i) => (
          <div key={i} className='break-inside-avoid mb-4'>
            <img
              className="w-full "
              src={item.img}
              alt={`pic ${i}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default FuniroFurniture;
