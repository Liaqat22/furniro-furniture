import React, { useState } from 'react'
import { Typography, Drawer, Box, Grid2, ListItem, List, ListItemIcon, ListItemText, } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';



function NavRes() {
    const [open, setOpen] = useState(false); // State to control the drawer
const location = useLocation()
    const tabs = [
        { title: "home", url: "/", icon: "fa-solid fa-house" },
        { title: "shop", url: "/shop", icon: "fa-solid fa-shop" },
        { title: "about",url: "/about", icon: "fa-solid fa-circle-info" },
        { title: "contact",url: "/contact", icon: "fa-solid fa-envelope" }
    ];

    const icons = [
        {url: " ", title: "user", icon: "fa-solid fa-user" },
        {url: " ", title: "search", icon: "fa-solid fa-magnifying-glass" },  // Search icon
        {url: " ", title: "likes", icon: "fa-solid fa-heart" },
        {url: "/cart", title: "cart", icon: "fa-solid fa-cart-shopping" }  // Shopping cart icon
    ];
    



    const toggleDrawer = () => {
        setOpen(!open); // Toggle the drawer open/close
    };

    const drawerContent = (
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer} className = "flex flex-col gap-4 ">
            <Box sx={{ display: "flex", alignItems: "center" }} mt={2} >
                <Box component='img' src="https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735662363/Meubel_House_Logos-05-0_xvo9rt.png" alt='dashboard-logo' sx={{ height: "60px", width: "60px" }} />
                <Box>
                    <Typography color='#000000' className='mx-1 !text-3xl' fontWeight="700">Furniro</Typography>

                </Box>
            </Box>

            <List>
                {tabs?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 text-textblack current:bg-lightgoldbg current:text-white current:w-[80%] rounded-r-xl'
                        button
                        component={NavLink}
                        to={item?.url}
                        key={i}
                        sx={{ textTransform: "capitalize",paddingLeft:"0rem" }}
                    >
                        <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className={`${ location.pathname === item.url ? 'text-white' : 'text-textblack'} text-lg ${item.icon} `} />
                        </ListItemIcon>
                        <ListItemText primary={<p className ="!font-semibold mb-0">{item.title}</p>} />
                    </ListItem>
                ))}
            </List>


            <List>
                {icons?.map((item, i) => (
                    <ListItem
                        className='mui-list-item mt-2 text-textblack current:bg-lightgoldbg current:text-white current:w-[85%] rounded-r-xl'
                        button
                        component={NavLink}
                        to={item?.url}
                        key={i}
                        sx={{ textTransform: "capitalize",paddingLeft:"0rem" }}
                        
                    >
                        <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className={`${ location.pathname === item.url ? 'text-white' : 'text-textblack'} text-lg ${item.icon} `} />
                        </ListItemIcon>
                        <ListItemText primary={<p className ="!font-semibold mb-0">{item.title}</p>} />
                    </ListItem>
                ))}
            </List>

        </div>
    );
    return (
        <>
            <Grid2 container spacing={2} columns={12} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <Grid2 size={{ sx: 5, sm: 6 }}>
                    <div className='logo '>
                        <div className='logodiv flex  items-center'>
                            <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735662363/Meubel_House_Logos-05-0_xvo9rt.png' alt='logo' className='h-[60px] w-auto' />
                            <h1 className='!text-4xl !font-bold text-[#000000]' >Furniro</h1>
                        </div>
                    </div>
                </Grid2>

                <Grid2 size={{ sx: 5, sm: 5 }} className="!w-fit">
                    {/* AppBar with Menu Button */}
                    <i className='fas fa-bars fa-2xl' onClick={toggleDrawer} />
                </Grid2>
            </Grid2>




            {/* Drawer Component */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer}  >
                {drawerContent}
            </Drawer>
        </>
    )
}

export default NavRes