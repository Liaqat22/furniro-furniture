import { Grid2, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
function BillingDetails({ data, setdata }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Fetch country list from API (example API: https://restcountries.com/v3.1/all)
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchCountries();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <>
            <div className='flex flex-col !gap-10'>
                <div>
                    <Grid2 container spacing={2} columns={12}>
                        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
                            <div className='flex flex-col gap-2' >
                                <label className='capitalize text-textblack font-medium'>first name</label>
                                <input type='text' required
                                    // name="firstname"
                                    value={data.firstname}
                                    onChange={(e) => setdata({ ...data, firstname: e.target.value })} className='border border-gray-600 leading-[3.5rem] rounded-lg px-3' />
                            </div>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
                            <div className='flex flex-col gap-2' >
                                <label className='capitalize text-textblack font-medium'>last name</label>
                                <input type='text' required
                                    name="lastname"
                                    value={data.lastname}
                                    onChange={handleChange}
                                    className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                            </div>
                        </Grid2>
                    </Grid2>
                </div>


                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>company name (optional)</label>
                    <input type='text'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                </div>

                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>country / region</label>
                    <Select
                        name="country"
                        value={data.country}
                        onChange={handleChange}
                        className="border border-gray-600 h-[3.5rem] rounded-lg px-3  "
                        required
                    >
                        {/* Placeholder */}
                        <MenuItem value="" disabled className='!bg-transparent'>
                            Select a country
                        </MenuItem>

                        {/* Map countries to MenuItem */}
                        {countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
.map((country) => (
                            <MenuItem
                                key={country.cca2}
                                value={country.name.common}
                                className="cursor-pointer font-medium hover:!bg-lightgoldbg hover:text-white current:!text-white duration-100 px-4 py-3 "
                            >
                                {country.name.common}
                            </MenuItem>
                        ))}
                    </Select>

                </div>
                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>street address</label>
                    <input type='text'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>town / city</label>
                    <input type='text'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>province</label>
                    <input type='text'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>zip code</label>
                    <input type='text'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>phone</label>
                    <input type='text'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-2' >
                    <label className='capitalize text-textblack font-medium'>email address</label>
                    <input type='email'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' />
                </div>
                <div className='flex flex-col gap-2' >
                    <input type='email'
                        className='border border-gray-600 h-[3.5rem] rounded-lg px-3' placeholder='Amount Information'/>
                </div>
            </div>
        </>
    )
}

export default BillingDetails