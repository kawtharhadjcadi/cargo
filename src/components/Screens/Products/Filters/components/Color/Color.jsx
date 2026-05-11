import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TextSmall } from '../../../../../../Style/TextStyle';

const colours = [
  { id: 'white', label: 'Blanc', count: 2114, color: '#ffffff', border: true },
  { id: 'grey', label: 'Gris', count: 2030, color: '#808080' },
  { id: 'silver', label: 'Argent', count: 782, color: '#c0c0c0', border: true },
  { id: 'black', label: 'Noir', count: 1254, color: '#000000' },
  { id: 'blue', label: 'Bleu', count: 654, color: '#2563eb' },
  { id: 'red', label: 'Rouge', count: 216, color: '#dc2626' },
  { id: 'not-supplied', label: 'Non fourni', count: 140, color: '#e5e7eb', border: true },
  { id: 'yellow', label: 'Jaune', count: 62, color: '#facc15' },
  { id: 'orange', label: 'Orange', count: 163, color: '#f97316' },
  { id: 'green', label: 'Vert', count: 101, color: '#16a34a' },
  { id: 'brown', label: 'Marron', count: 50, color: '#92400e' },
  { id: 'beige', label: 'Beige', count: 11, color: '#d4b483', border: true },
  { id: 'purple', label: 'Violet', count: 15, color: '#7c3aed' },
  { id: 'gold', label: 'Or', count: 3, color: '#eab308' },
  { id: 'pink', label: 'Rose', count: 3, color: '#f9a8d4', border: true },
];

const INITIAL_SHOW = 7;
const Color = () => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState([]);

  const visibleColours = showAll ? colours : colours.slice(0, INITIAL_SHOW);

  const toggleSelect = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  };

  return (
    <div className="flex flex-col py-2">
      {colours.map((colour) => (
        <div
          key={colour.id}
          onClick={() => toggleSelect(colour.id)}
          className="flex items-center justify-between py-3 cursor-pointer hover:bg-accent px-2 rounded-lg transition"
        >
          {/* Left: circle + label */}
          <div className="flex items-center gap-3">
            <div
              className={`w-6 h-6 rounded-full shrink-0 ${colour.border ? 'border border-gray-300' : ''}`}
              style={{ backgroundColor: colour.color }}
            />
            <TextSmall className="text-sm font-medium">{colour.label}</TextSmall>
          </div>

          {/* Right: count + checkbox */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{colour.count.toLocaleString()}</span>
            <Checkbox checked={selected.includes(colour.id)} onCheckedChange={() => toggleSelect(colour.id)} />
          </div>
        </div>
      ))}

      {/* Toggle button */}
      {/* <Button
        variant="outline"
        className="mt-3 w-full rounded-full font-semibold"
        onClick={() => {
            e.stopPropagation()
            setShowAll(!showAll)
        }}
      >
        {showAll ? 'Masquer les couleurs' : 'Plus de couleurs'}
      </Button> */}
    </div>
  );
};

export default Color;
