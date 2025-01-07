import { Grid2, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function ContactForm() {
    const contactdata = [
        { icon: "fas fa-map-marker-alt", primar: "Address", secondary: "236 5th SE Avenue, New York NY10000, United States" },
        { icon: "fas fa-phone", primar: "Phone", secondary: (<>Mobile: +(84) 546-6789  <br />Hotline: +(84) 456-6789</>) },
        { icon: "fas fa-clock", primar: "Working Time", secondary: (<>Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</>) }
    ];

    const forminputs = [
        { label: "your name", placeholder: "ABC", type: "text" },
        { label: "email", placeholder: "abc@gmail.com", type: "email" },
        { label: "subject", placeholder: "This is an optional", type: "text" },
    ]

    return (
        <>
            <div className='flex flex-col gap-8 justify-center'>
                <div className='flex flex-col gap-2 container-fluid'>
                    <h1 className='font-bold capitalize text-textblack text-3xl text-center'>
                        Get In Touch With Us
                    </h1>
                    <div className='flex justify-center px-2'>
                    <p className='font-medium mb-0 capitalize text-graytext sm:text-center lg:text-center xl:text-center sx:text-justify  xl:w-[50%] lg:[55%] md:w-[60%]'>
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                        Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                    </div>
                </div>
                {/* FORM */}
                <div className='contactform container '>
                    <Grid2 container spacing={2} columns={12} className="flex justify-between">
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                            <List>
                                {contactdata?.map((item, i) => (
                                    <ListItem
                                        className='mui-list-item mt-2 '
                                        key={i}
                                        sx={{ textTransform: "capitalize", paddingLeft: "0rem" }}
                                    >
                                        <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <i className={` text-lg text-textblack ${item.icon} `} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<p className="!font-semibold mb-0">{item.primar}</p>}
                                            secondary={<p className="!font-semibold mb-0">{item.secondary}</p>} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 7 }}>
                            <form className='flex flex-col gap-4'>
                                {forminputs.map((f, i) => (
                                    <div className='flex flex-col gap-2' key={i}>
                                        <label className='capitalize text-textblack font-medium'>{f.label}</label>
                                        <input type={f.type} className='border border-gray-600 leading-[3.5rem] rounded-lg px-3' placeholder={f.placeholder} />
                                    </div>
                                ))}

                                <div className='flex flex-col gap-2'>
                                <label className='capitalize text-textblack font-medium'>message</label>
                                    <textarea rows={4} className='border border-gray-600  rounded-lg p-3' placeholder='Hi! i’d like to ask about'></textarea>
                                </div>

                                <div>
                                <button type='submit' className='text-white px-3 py-3 bg-lightgoldbg font-medium rounded-lg min-w-[40%]'>Submit</button>
                                </div>

                            </form>
                        </Grid2>
                    </Grid2>
                </div>
            </div>
        </>
    )
}

export default ContactForm