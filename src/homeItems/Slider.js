import React, { useEffect, useState } from 'react';

function Slider() {
    const [count, setCount] = useState(0);

    const images = [
        "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735838475/Rectangle_25_t0tllc.png",
        "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735838475/Rectangle_25_t0tllc.png",
        "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735838475/Rectangle_25_t0tllc.png",
        "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735838475/Rectangle_25_t0tllc.png",
    ];

    const next = () => {
        const newIndex = count === images.length - 1 ? 0 : count + 1;
        setCount(newIndex);
    };

    const back = () => {
        const newIndex = count === 0 ? images.length - 1 : count - 1;
        setCount(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 2000);
        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [count])
    return (
        <div >
            <div className=" flex gap-3 overflow-hidden ">
                <img src={images[count]} alt='.' className='h-[auto]  object-contain ' />
                <img src={images[(count + 1) % images.length]} alt='.' className='h-[auto]  object-contain ' />
            </div>

            <div className=" flex items-center justify-between mt-3">
                <i onClick={back} className="bg-white p-3 text-[#B88E2F] shadow-md rounded-full fas fa-arrow-left cursor-pointer" />
                <div className='flex mx-2'>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={` rounded-full   p-1 mx-1 ${index === count ? 'border-[#B88E2F] border-1' : 'border-gray-400 border-none'}`} >
                            <div
                                className={`w-[10px] h-[10px] rounded-full   ${index === count ? 'bg-[#B88E2F]' : 'bg-gray-400'}`} >
                            </div>
                        </div>
                    ))}
                </div>
                <i onClick={next} className="bg-white p-3 text-[#B88E2F] shadow-md rounded-full fas fa-arrow-right cursor-pointer" />

            </div>
        </div>
    )
}

export default Slider