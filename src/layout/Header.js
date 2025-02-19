import React from 'react'
import { NavLink } from 'react-router-dom'
import NavRes from './NavRes';
import { Grid2 } from '@mui/material';

function Header() {
  const tabs = [
    { title: "home", url: "/" },
    { title: "shop", url: "/shop" },
    { title: "about", url: "/about" },
    { title: "contact", url: "/contact" },
    { title: "services", url: "/services" },
  ]
  const icons = [
    { url: " ", title: "user", icon: "fa-solid fa-user" },
    { url: " ", title: "search", icon: "fa-solid fa-magnifying-glass" },  // Search icon
    { url: " ", title: "likes", icon: "fa-solid fa-heart" },
    { url: "/cart", title: "cart", icon: "fa-solid fa-cart-shopping" }  // Shopping cart icon
  ];

  return (
    <>
      <nav className='container-fluid'>
        <div className="sx:!block lg:!hidden  md:!hidden">
          <NavRes />
        </div>

        <div className='px-7  sx:!hidden lg:!block  md:!block'>
          <Grid2 container spacing={1.5} columns={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Grid2 size={{ sm: 3, md: 3 }} >
              <div className='logodiv flex  items-center'>

                <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735662363/Meubel_House_Logos-05-0_xvo9rt.png' alt='logo' className='h-[60px] w-auto' />
                <h1 className='text-4xl !font-bold text-[#000000] md:text-3xl' >Furniro</h1>
              </div>
            </Grid2> {/*LOGO*/}

            <Grid2 size={{ sm: 5, md: 5 }} >
              <ul className='p-0 m-0 flex flex-row justify-around items-center '>
                {tabs.map((t, i) => (
                  <li key={i} className='list-none'>
                    <NavLink to={t.url} className="no-underline capitalize text-[#000000] font-semibold p-2 current:rounded-lg current:border-l-[2px]  current:border-b-[2px] current:border-lightgoldbg" >{t?.title}</NavLink>
                  </li>
                ))}
              </ul>
            </Grid2>

            <Grid2 size={{ sm: 2.7, md: 3 }} >
              <ul className='p-0 m-0 flex flex-row justify-around items-center '>
                {icons.map((t, i) => (
                  <li key={i} className='list-none'>
                    <NavLink to={t.url} className="no-underline capitalize text-[#000000] font-semibold p-2 current:rounded-md current:border-l-[2px]  current:border-b-[2px] current:border-lightgoldbg" >
                      <i className={`fa-lg ${t?.icon}`} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Grid2>

          </Grid2>
        </div>
      </nav>
    </>
  )
}

export default Header