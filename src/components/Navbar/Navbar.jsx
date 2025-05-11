import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo-nav.png';
import { IoMdCart } from 'react-icons/io';
import { IoClose, IoLogIn, IoMenu } from 'react-icons/io5';
import user from '../../assets/user.jpeg'

const navLink = [
    {
        id: 1,
        path: "/",
        display: "Home"
    },
    {
        id: 2,
        path: "/product",
        display: "Products"
    },
    {
        id: 2,
        path: "/blogs",
        display: "Blogs"
    },
    {
        id: 3,
        path: "/contacts",
        display: "Contacts"
    }
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <nav className='lg:h-[10vh] lg:py-0 py-[8px] container mx-auto lg:px-[90px] md:px-[50px] px-[20px] bg-[#fff] w-full flex items-center justify-between border-b-[1px] border-[#e6e6e6]'>
            {/* Nav Logo */}
            <Link to={"/"}>
                <img className='lg:h-[40px] md:h-[35px] h-[30px]' src={logo} alt="Logo" />
            </Link>

            {/* Nav Midle Section */}
            <ul className='lg:flex md:items-center md:gap-[30px] hidden'>
                {
                    navLink?.map((link) => (
                        <li>
                            <NavLink className={className => className?.isActive ? "text-[#6442f9] pb-[2px] border-b-[2px] border-[#6442f9] font-medium" : "text-[#0a0618] font-medium"} to={link?.path}>{link?.display}</NavLink>
                        </li>
                    ))
                }
                <li>

                </li>
            </ul>

            {/* Nav  Right Section */}
            <div className='flex items-center lg:gap-[30px] md:gap-[25px] gap-[20px]'>
                <Link className='h-[40px] w-[40px] relative flex items-center justify-center text-[#0a0618]' to={"cart"}>
                    <div className='text-[30px]'>
                        <IoMdCart />
                    </div>
                    <div className='h-[8px] absolute top-[5px] left-[30px] w-[8px] bg-[#6442f9] rounded-full'></div>
                </Link>

                <div>
                    {
                        user ? (
                            <img src={user} alt="" />
                        ) : (
                            <Link className='py-[8px] px-[30px] bg-[#6442f9] text-[#fff] rounded-md uppercase gap-[6px]' to={"/login"}>
                                Login
                            </Link>
                        )
                    }
                </div>

                <button onClick={handleToggle} className='text-[28px] lg:hidden'>
                    {!open ? <IoMenu /> : <IoClose />}
                </button>
            </div>

        </nav>
    );
};

export default Navbar;