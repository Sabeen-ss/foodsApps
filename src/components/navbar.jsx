import React from 'react';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping, faXmark, faTruck, faHeart, faWallet, faCircleQuestion, faTag, faCircleArrowDown, faUserGroup } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    //usestate for side menu
    const [nav, setnav] = useState(false)

    return (

        <div className='bg-white h-20 flex items-center justify-between p-8 mt-3'>
            {/* Top bar text */}
            <div className='flex items-center '>
                <FontAwesomeIcon onClick={() => setnav(!nav)} icon={faBars} className='mr-2 ml-10 text-2xl cursor-pointer' />
                <h2 className='text-black text-2xl'>Best <b>Eats</b></h2>
            </div>
            {/* Top bar buttons */}
            <div className='flex items-center bg-gray-200 rounded-full p-1 text-[14px] mr-44 ml-3'>
                <button className='bg-black text-white rounded-full p-2 mr-2'>Delivery</button>
                <button className='p-2'>Pickup</button>
            </div>
            {/* Top bar input */}
            <div className='flex items-center bg-gray-200 rounded-full p-1 px-2  w-[50%] '>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-2' />
                <input className='bg-transparent p-1 w-[90%]  focus:outline-none' type='text' placeholder='Search Foods....' />
            </div>
            {/* Top bar cart */}
            <button className='bg-black text-white flex items-center py-2 px-4 rounded-full mr-10'>
                <FontAwesomeIcon icon={faCartShopping} className='mr-2' />
                <b>Cart</b>
            </button>

            {/* overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen inset-0'></div> : ""}

            {/* side menu */}

            <div className={`fixed top-0 left-0 w-64 h-screen z-10 bg-white transition-transform duration-500 ${nav ? 'transform-none' : '-translate-x-full'}`}>
                <FontAwesomeIcon onClick={() => setnav(!nav)} icon={faXmark} size='2x' className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-black text-2xl p-5'>Best <b>Eats</b></h2>
                {/* Nav bar items */}
                <nav>
                    <ul className='flex flex-col p-5 text-gray-800 '>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faTruck} className='mr-2' /> Orders</li>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faHeart} className='mr-2' />Favourites</li>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faWallet} className='mr-2' />Wallet</li>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faCircleQuestion} className='mr-2' />Help</li>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faTag} className='mr-2' />Promotions</li>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faTag} className='mr-2' />Promotions</li>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faCircleArrowDown} className='mr-2' />Best Once</li>
                        <li className='text-xl py-4 flex'><FontAwesomeIcon icon={faUserGroup} className='mr-2' />Invite Frients</li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default Navbar;