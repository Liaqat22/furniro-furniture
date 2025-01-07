import React from 'react'

function SizeColors() {
    return (
        <>
            <section className='customs flex gap-4 flex-col'>

                {/* SIZES */}

                <div className='size flex gap-2 flex-col'>
                    <p className='text-graytext font-semibold mb-0'>size</p>
                    <div className='size-type flex gap-3 '>
                        {["l", "xl", "xs"].map((page) => (
                            <button
                                key={page}
                                className={` pagination min-w-12 min-h-10 ${page === "l" ? "active" : " "}  current:bg-lightgoldbg current:text-white
bg-bgpink rounded-lg flex justify-center items-center !px-4 !py-2 no-underline text-textblack uppercase`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>

                {/* COLORS */}

                <div className='colors flex gap-2 flex-col'>
                    <p className='text-graytext font-semibold mb-0'>color</p>
                    <div className='size-type flex gap-3 '>
                        {["bg-[#816DFA]", "bg-[#000000]", "bg-[#B88E2F]"].map((color) => (
                            <button
                                key={color}
                                className={`pagination min-w-8 min-h-8 ${color} rounded-full flex justify-center items-center !px-4 !py-2 no-underline uppercase`}>   </button>
                        ))}
                    </div>
                </div>

                {/* BUTTONS */}
                <div className='carbtn flex gap-3 items-center flex-wrap '>
                    <div className='incr-decr flex justify-around items-center border rounded-xl w-36 py-3 h-auto '>
                        <i className='fas fa-minus cursor-pointer' />
                        <p className='mb-0'>1</p>
                        <i className='fas fa-plus cursor-pointer' />
                    </div>
                    <div className='flex gap-2 '>
                        <button className='incr-decr text-lg font-semibold flex justify-around capitalize items-center border-black border rounded-xl lg:w-40 md:w-40 py-3 h-auto sx:w-32'>
                            add to cart
                        </button>
                        <button className='incr-decr text-lg font-semibold flex justify-around capitalize items-center border-black border rounded-xl lg:w-40 md:w-40 py-3 h-auto sx:w-32'>
                            + compare
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SizeColors