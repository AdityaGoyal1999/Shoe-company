import React, { useState } from 'react';
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants';


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="padding-x padding-y absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              { navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} 
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              )) }
            </ul>
            { !menuOpen && (
            <div className="hidden max-lg:block">
              <img 
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}
                onClick={toggleMenu}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              />
            </div>
            )
            }

            {menuOpen && (
              <div className={`fixed top-0 right-0 w-[250px] h-screen bg-white shadow-lg z-40 flex flex-col transform transition-transform duration-1000 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                  <button onClick={toggleMenu} className="text-2xl">&times;</button>
                </div>
                <ul>
                  { navLinks.map((item) => (
                    <li key={item.label} className="flex justify-center my-10">
                      <a href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                      >{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </nav>
    </header>
  )
}

export default Nav