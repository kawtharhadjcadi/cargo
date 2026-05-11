import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, X } from 'lucide-react';
import { TextExtraExtraSmallBlack, TextSmallBlack } from '../../../../Style/TextStyle';

import BodyType from './components/BodyType';
import { Button } from '@/components/ui/button';
import Color from './components/Color';
import FuelType from './components/FuelType';
import Gearbox from './components/Gearbox';
import { Input } from '@/components/ui/input';
import Make from './components/Make';
import Price from './components/Price';
import React from 'react';
import Seats from './components/Seats';
import Sort from './components/Sort';
import Year from './components/Year';

const FilterCars = ({ isOpen, onClose, search, onSearch }) => {
  const items = [
    {
      value: 'make',
      trigger: 'Marque & Modèle',
      component: <Make />,
    },
    {
      value: 'price',
      trigger: 'Prix',
      component: <Price />,
    },
    {
      value: 'year',
      trigger: 'Année',
      component: <Year />,
    },
    {
      value: 'gearbox',
      trigger: 'Boîte de vitesses',
      component: <Gearbox />,
    },
    {
      value: 'fuel',
      trigger: 'Type de carburant',
      component: <FuelType />,
    },
    {
      value: 'body',
      trigger: 'Type de carrosserie',
      component: <BodyType />,
    },
    {
      value: 'color',
      trigger: 'Couleur',
      component: <Color />,
    },
    {
      value: 'seats',
      trigger: 'Nombre de sièges',
      component: <Seats />,
    },
  ];

  return (
    <div>
      {/* Desktop Filters */}
      <div className="sticky lg:block">
        {/* Search input */}
        <div className="mb-4">
          <TextExtraExtraSmallBlack className="text-xs text-gray-500 tracking-widest mb-1.5 block">
            Recherche
          </TextExtraExtraSmallBlack>
          <div className="relative">
            <input
              type="text"
              placeholder="ex: BMW M4"
              className="w-full border border-gray-200 rounded-lg pl-3 pr-9 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Accordion filters */}
        <Accordion type="multiple" className="max-w-lg" defaultValue={['make']}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="px-[5px]">
              <AccordionTrigger className="flex items-center justify-between w-full [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-green-600">
                <TextSmallBlack>{item.trigger}</TextSmallBlack>
              </AccordionTrigger>
              <AccordionContent className="my-[4px]">{item.component}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={onClose} />}

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-50 border-b p-4 bg-white flex items-center justify-between">
          <h2 className="text-lg font-bold">Filtres</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Filter Content */}
        <div className="p-4">
          <Accordion type="multiple" defaultValue={['make']}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border-b px-0">
                <AccordionTrigger className="font-semibold text-gray-900 hover:text-green-600 py-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-green-600 px-0">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-0">{item.component}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t p-4 bg-white flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Fermer
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={onClose}>
            Appliquer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterCars;