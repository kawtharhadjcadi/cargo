import { ChevronDown, Heart, Menu as MenuIcon, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React, { useState } from 'react';

import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import { LabelWhite } from '../../Style/TextStyle';
import ListItem from './ListItem';
import { Navigation } from '../Navigation';
import TikTok from '../Icons/TikTok';

const marques = [
  {
    title: 'BMW',
    href: '/product',
  },
  {
    title: 'Mercedes-Benz',
    href: '/product',
  },
  {
    title: 'Audi',
    href: '/product',
  },
  {
    title: 'Volkswagen',
    href: '/product',
  },
  {
    title: 'Toyota',
    href: '/product',
  },
  {
    title: 'Ford',
    href: '/product',
  },
  {
    title: 'Renault',
    href: '/product',
  },
  {
    title: 'Peugeot',
    href: '/product',
  },
  {
    title: 'Tesla',
    href: '/product',
  },
  {
    title: 'Honda',
    href: '/product',
  },
  {
    title: 'Nissan',
    href: '/product',
  },
  {
    title: 'Citroën',
    href: '/product',
  },
];

export default function MainNav() {
  const [marquesOpen, setMarquesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleMarqueClick = (marque) => {
    setMarquesOpen(false);
    setMobileOpen(false);
    navigate(`/products?marque=${encodeURIComponent(marque)}`);
  };

  return (
    <>
      <div className="w-full h-[64px] bg-white px-[45px] py-10 flex items-center justify-between relative z-50 shadow-sm">
        {' '}
        <div className="flex flex-row items-center gap-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center shrink-0">
            <img src="images/logo2.png" alt="DZ Cargo" className="h-18 w-auto object-contain" />
          </NavLink>

          {/* Desktop Nav */}
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          <LabelWhite>
            <NavLink to="/products">Voitures nouveau</NavLink>
          </LabelWhite>

          <LabelWhite>
            <NavLink to="/products">Voitures moins 3ans</NavLink>
          </LabelWhite>

          <LabelWhite>
            <NavLink to="/products">Pieces</NavLink>
          </LabelWhite>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <LabelWhite>
                  <NavigationMenuTrigger>Marques</NavigationMenuTrigger>
                </LabelWhite>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[300px] md:grid-cols-2 lg:w-[300px]">
                    {/* {components.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))} */}
                    {marques.map((marque) => (
                      <ListItem key={marque.title} title={marque.title} href={marque.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <LabelWhite>
            <NavLink to="/contact">Contact</NavLink>
          </LabelWhite>
        </nav>
        <NavLink to="/favourites" className="p-2 hidden lg:flex">
          <div className="flex items-center gap-3 mt-1">
            {[
              {
                label: 'Facebook',
                path: <Facebook />,
              },
              {
                label: 'Instagram',
                path: <Instagram />,
              },
              {
                label: 'TikTok',
                path: <TikTok />,
              },
            ].map((icon) => (
              <button
                key={icon.label}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-400 hover:border-green-700 hover:bg-white transition"
                aria-label={icon.label}
              >
                {icon.path}
              </button>
            ))}
          </div>
        </NavLink>
        {/* Hamburger — mobile only */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition" onClick={() => setMobileOpen(true)}>
          <MenuIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="w-full bg-gray-50 border-b border-gray-200 px-[45px] py-2 flex items-end justify-end gap-8">
        <span className="text-sm text-gray-600">Contact</span>
        <div className="flex items-center gap-1">
          <img src="https://flagcdn.com/w40/dz.png" alt="Algeria" className="w-6 h-5 rounded-full object-cover" />
          <img src="https://flagcdn.com/w40/cn.png" alt="China" className="w-6 h-5 rounded-full object-cover" />
        </div>
      </div>

      {/* Mobile Side Menu */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 left-0 h-screen w-72 bg-white z-50 flex flex-col shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="text-lg font-bold">
                <span style={{ color: '#C0392B' }}>DZ</span>
                <span className="text-gray-900"> Cargo</span>
              </span>
              <button onClick={() => setMobileOpen(false)} className="p-1 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
              <NavLink
                to={Navigation.CARS}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-800 hover:text-green-700 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
              >
                Acheter des voitures
              </NavLink>

              {/* Marques section */}
              <div>
                <button
                  onClick={() => setMarquesOpen(!marquesOpen)}
                  className="w-full flex items-center justify-between text-sm font-medium text-gray-800 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
                >
                  Marques
                  <ChevronDown className={`w-4 h-4 transition-transform ${marquesOpen ? 'rotate-180' : ''}`} />
                </button>
                {marquesOpen && (
                  <div className="grid grid-cols-2 gap-1 px-3 pb-2">
                    {marques.map((marque) => (
                      <button
                        key={marque}
                        onClick={() => handleMarqueClick(marque)}
                        className="text-left text-sm text-gray-600 hover:text-green-700 py-2 px-2 rounded-lg hover:bg-gray-50 transition"
                      >
                        {marque}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to={Navigation.CONTACT}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-800 hover:text-green-700 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
              >
                Contact
              </NavLink>
            </div>
            <div className="flex items-center gap-3 px-3 py-4 border-t border-gray-100 mt-auto">
              {[
                { label: 'Facebook', path: <Facebook /> },
                { label: 'Instagram', path: <Instagram /> },
                { label: 'TikTok', path: <TikTok /> },
              ].map((icon) => (
                <button
                  key={icon.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-400 hover:border-green-700 hover:bg-white transition"
                  aria-label={icon.label}
                >
                  {icon.path}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
