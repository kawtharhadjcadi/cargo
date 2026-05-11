import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Filter, Search } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import Cars from './Cars';
import FilterCars from './Filters';
import { Input } from '@/components/ui/input';
import { TextExtraExtraSmallBlack } from '../../../Style/TextStyle';
import { useIsMobile } from '@/hooks/use-mobile';

const Products = () => {
  const isMobile = useIsMobile();
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => setSearch(searchInput);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>
      {/* Desktop View */}
      <section className="hidden lg:block min-h-screen">
        {/* Page Header */}
        <div className="px-[45px] pt-[40px] pb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <TextExtraExtraSmallBlack>Acceuil</TextExtraExtraSmallBlack>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <TextExtraExtraSmallBlack>Voitures</TextExtraExtraSmallBlack>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {/* <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-1">Notre Inventaire</p> */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-gray-500 mt-1">268,356 Véhicules disponibles</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TextExtraExtraSmallBlack className="font-medium">TRIER PAR</TextExtraExtraSmallBlack>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white shadow-sm focus:outline-none">
                <option>Recommandé</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Plus récent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="px-[45px] pb-[50px] flex gap-6">
          {/* Sidebar */}
          <div className="w-72 flex-shrink-0">
            <div className="sticky top-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">Filtres</h2>
                <button className="text-sm text-green-700 font-medium hover:underline">Réinitialiser</button>
              </div>
              <FilterCars isOpen={false} onClose={() => {}} search={search} onSearch={setSearch} />
            </div>
          </div>

          {/* Cars */}
          <div className="flex-1">
            <Cars
              search={search}
              searchInput={searchInput}
              onSearchChange={setSearchInput}
              onSearch={handleSearch}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="lg:hidden flex flex-col min-h-screen bg-[#F3FBF5]">
        {/* Mobile Header - Sticky */}
        <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
          <div className="px-4 py-3">
            <div className="flex items-center gap-2">
              {/* Filter button — triggers sidebar */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex-shrink-0 h-10 w-10 border border-gray-200 rounded-lg flex items-center justify-center bg-white"
              >
                <Filter className="w-5 h-5 text-gray-600" />
              </button>

              {/* Search input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search cars..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-9 pr-4 h-10 border-gray-200 rounded-lg"
                />
              </div>

              {/* Search button */}
              <button
                onClick={handleSearch}
                className="flex-shrink-0 h-10 w-10 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cars Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <Cars
            search={search}
            searchInput={searchInput}
            onSearchChange={setSearchInput}
            onSearch={handleSearch}
            onKeyPress={handleKeyPress}
            isMobile
          />
        </div>
      </section>

      {/* Mobile filter drawer — always rendered, toggled via isOpen */}
      {isMobile ? (
        <FilterCars isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} search={search} onSearch={setSearch} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
