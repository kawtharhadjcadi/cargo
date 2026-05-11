import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React, { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { TextSmall } from '../../../../../../Style/TextStyle';

const bodyTypes = [
  { id: 'estate', label: 'Break', count: 13, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=80' },
  { id: 'suv', label: 'SUV', count: 45, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=80' },
  {
    id: 'hatchback',
    label: 'Citadine',
    count: 28,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=80',
  },
  { id: 'saloon', label: 'Berline', count: 19, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=80' },
  { id: 'coupe', label: 'Coupé', count: 8, image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=80' },
];
const BodyType = () => {
  return (
    <div className="flex flex-col gap-2 py-2">
      {bodyTypes.map((item) => (
        <div className="flex items-center justify-between border border-input rounded-xl px-3 py-2 hover:bg-accent cursor-pointer transition">
          {/* Left: image + label */}
          <div className="flex items-center gap-3">
            <img src={item.image} alt={item.label} className="w-16 h-10 object-contain" />
            <TextSmall className="text-sm font-medium">{item.label}</TextSmall>
          </div>

          {/* Right: count + checkbox */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{item.count}</span>
            <Checkbox id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BodyType;