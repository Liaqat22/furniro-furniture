import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className='flex flex-col gap-4'>
                <main style={{ minHeight: '70vh' }}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout