import React, { useState } from 'react'
import { styles } from '../util/style'
import { Close, logo, menu } from '../assets'
import { NavLinks } from '../util/constants'

const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const [active, Setactive] = useState('home')

    const toggleHandler = () => setToggleNav(prev => !prev)
    const activeHandler = (id) => Setactive(id)

    return (
        <div className={`${styles.DisplayBetween} ${styles.container} py-6 w-full `}>
            {/* Logo  section*/}
            <div className='w-[135px] h-[35px] cursor-pointer'><img src={logo} alt="" /></div>
            {/* Navigation  section*/}
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {NavLinks.map((nav, idx) => (
                    <li key={nav.id} className={`${idx === NavLinks.length - 1 ? 'mr-0' : 'mr-10'} 
            ${active === nav.id ? 'text-lightBlue' : 'text-darkGreen'} cursor-pointer font-raleway font-semibold text-darkGreen hover:text-lime-500 text-[18px] transition-all duration-500 `}
                        onClick={() => activeHandler(nav.id)} >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            {/* Hamburger menu and Close btns  section*/}
            <div className='sm:hidden flex flex-1 justify-end items-center '>
                <img src={toggleNav ? Close : menu} alt="no pic" className='w-[35px] h-[35px] object-contain' onClick={toggleHandler} />
                <div className={`${!toggleNav ? 'hidden' : 'flex'} py-6 absolute top-[58px] right-0 left-0 h-full w-full z-10`}>
                    <ul className='list-none flex-col items-center justify-center flex-1 w-full bg-slate-50 duration-500'>
                        {NavLinks.map((nav, idx) => (
                            <li key={nav.id} className={`${idx === NavLinks.length ? 'mt-0' : 'mt-5'} 
                    ${active === nav.id ? 'text-lightBlue' : 'text-darkGreen'} cursor-pointer font-raleway font-semibold text-darkGreen hover:ml-2 text-[18px] transition-all duration-500 border-b-[1px] border-[#8ce404] px-3`}
                                onClick={() => activeHandler(nav.id)}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
