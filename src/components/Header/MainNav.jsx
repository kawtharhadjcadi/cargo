import { ChevronDown, Heart, Menu as MenuIcon, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

import { LabelWhite } from '../../Style/TextStyle';
import { Navigation } from '../Navigation';
import { useState } from 'react';

const marques = [
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Volkswagen',
  'Toyota',
  'Ford',
  'Renault',
  'Peugeot',
  'Tesla',
  'Honda',
  'Nissan',
  'Citroën',
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
        <div className="flex flex-row items-center gap-40">
          {/* Logo */}
          <NavLink to="/" className="flex items-center shrink-0">
            <img src="images/logo2.png" alt="DZ Cargo" className="h-18 w-auto object-contain" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-16">
            <LabelWhite>
              <NavLink to="/products">Acheter des voitures</NavLink>
            </LabelWhite>

            <div className="relative">
              <button onClick={() => setMarquesOpen(!marquesOpen)} className="flex items-center gap-1">
                <LabelWhite>Marques</LabelWhite>
                <ChevronDown className={`w-4 h-4 transition-transform ${marquesOpen ? 'rotate-180' : ''}`} />
              </button>

              {marquesOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMarquesOpen(false)} />
                  <div className="absolute top-8 left-0 z-50 bg-white border border-gray-100 rounded-xl shadow-lg p-3 w-56">
                    <div className="grid grid-cols-2 gap-1">
                      {marques.map((marque) => (
                        <button
                          key={marque}
                          onClick={() => handleMarqueClick(marque)}
                          className="text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700 px-3 py-2 rounded-lg transition"
                        >
                          {marque}
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button
                        onClick={() => {
                          navigate('/products');
                          setMarquesOpen(false);
                        }}
                        className="text-sm text-green-700 font-medium hover:underline px-3"
                      >
                        Voir toutes les marques →
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <LabelWhite>
              <NavLink
                to="/contact"
                // className={({ isActive }) =>
                //   `text-sm font-medium transition pb-0.5 ${isActive
                //     ? 'text-gray-900 border-b-2 border-gray-900'
                //     : 'text-gray-600 hover:text-gray-900'}`
                // }
              >
                Contact
              </NavLink>
            </LabelWhite>
          </nav>
        </div>
        {/* Right side */}
        {/* Favourites */}
        <NavLink to="/favourites" className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition">
          <Heart className="w-5 h-5 text-gray-600" />
        </NavLink>
        {/* Hamburger — mobile only */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" onClick={() => setMobileOpen(true)}>
          <MenuIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Mobile Side Menu */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 left-0 h-screen w-72 bg-white z-50 flex flex-col shadow-xl md:hidden">
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
          </div>
        </>
      )}
    </>
  );
}
