import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { TextSmall } from '../../../../../../Style/TextStyle';

const priceOptions = [
  'Quelconque',
  '500 DZ',
  '1,000 DZ',
  '2,000 DZ',
  '3,000 DZ',
  '4,000 DZ',
  '5,000 DZ',
  '6,000 DZ',
  '8,000 DZ',
  '10,000 DZ',
  '15,000 DZ',
  '20,000 DZ',
  '25,000 DZ',
  '30,000 DZ',
  '40,000 DZ',
];

const Price = ({ placeholder = '0' }) => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  const handleSelectFrom = (option) => {
    setFromValue(option === 'Quelconque' ? '' : option.split(' ')[0]);
    setOpenFrom(false);
  };

  const handleSelectTo = (option) => {
    setToValue(option === 'Quelconque' ? '' : option.split(' ')[0]);
    setOpenTo(false);
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        <TextSmall>De :</TextSmall>
        <div className="flex items-center p-1 border-2 border-black rounded-lg overflow-hidden">
          {/* Text input */}
          <Input
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            placeholder={placeholder}
            className="border-0 rounded-none"
          />
          {/* Divider */}
          <div className="w-px h-6 bg-border" />
          {/* Select */}
          <Popover open={openFrom} onOpenChange={setOpenFrom}>
            <PopoverTrigger asChild>
              <button className="px-3 h-full border-l hover:bg-accent transition">
                <ChevronDown className="w-5 h-5 text-black" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0 max-h-60 overflow-y-auto" align="end" position="popper">
              {priceOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectFrom(option)}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-accent ${
                    fromValue === option.split(' ')[0] ? 'bg-blue-600 text-white' : ''
                  }`}
                >
                  {option}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <TextSmall>À :</TextSmall>
        <div className="flex items-center p-1 border-2 border-black rounded-lg overflow-hidden">
          {/* Text input */}
          <Input
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            placeholder={placeholder}
            className="border-0 rounded-none"
          />
          {/* Divider */}
          <div className="w-px h-6 bg-border" />
          {/* Select */}
          <Popover open={openTo} onOpenChange={setOpenTo}>
            <PopoverTrigger asChild>
              <button className="px-3 h-full border-l hover:bg-accent transition">
                <ChevronDown className="w-5 h-5 text-black" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0 max-h-60 overflow-y-auto" align="end" position="popper">
              {priceOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectTo(option)}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-accent ${
                    toValue === option.split(' ')[0] ? 'bg-blue-600 text-white' : ''
                  }`}
                >
                  {option}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Price;