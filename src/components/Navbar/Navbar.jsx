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
        <nav className='h-[10vh] container mx-auto md:px-[90px] w-full flex items-center justify-between'>
            {/* Nav Logo */}
            <Link to={"/"}>
                <img className='h-[40px]' src={logo} alt="Logo" />
            </Link>

            {/* Nav Midle Section */}
            <ul className='flex items-center gap-[30px]'>
                {
                    navLink?.map((link) => (
                        <li>
                            <NavLink to={link?.path}>{link?.display}</NavLink>
                        </li>
                    ))
                }
                <li>

                </li>
            </ul>

            {/* Nav  Right Section */}
            <div className='flex items-center gap-[30px]'>
                <Link to={"cart"}>
                    <div className='text-[30px]'>
                        <IoMdCart />
                    </div>
                    <div className='h-[8px] w-[8px] bg-[#00c073] rounded-full'></div>
                </Link>

                <div>
                    {
                        user ? (
                            <img src={user} alt="" />
                        ) : (
                            <button>
                                <IoLogIn />
                                <span>
                                    Login
                                </span>
                            </button>
                        )
                    }
                </div>

                <button onClick={handleToggle} className=''>
                    {!open ? <IoMenu /> : <IoClose />}
                </button>
            </div>

        </nav>
    );
};

export default Navbar;