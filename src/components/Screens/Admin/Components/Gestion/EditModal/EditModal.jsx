import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MoreHorizontalIcon } from 'lucide-react';

const EditModal = ({ car, onClose, onSave }) => {
  const [form, setForm] = useState({ ...car });
  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));
  const fields = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'price', label: 'Price (£)', type: 'number' },
    { key: 'year', label: 'Year', type: 'number' },
    { key: 'mileage', label: 'Mileage (mi)', type: 'number' },
    { key: 'fuel', label: 'Fuel Type', type: 'text' },
    { key: 'transmission', label: 'Transmission', type: 'text' },
    { key: 'engine', label: 'Engine', type: 'text' },
    { key: 'bodyType', label: 'Body Type', type: 'text' },
    { key: 'doors', label: 'Doors', type: 'number' },
    { key: 'seats', label: 'Seats', type: 'number' },
    { key: 'colour', label: 'Colour', type: 'text' },
  ];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit — {car.name}</DialogTitle>
          <DialogDescription>Update the details below and save your changes.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 py-2">
          {fields.map(({ key, label, type }) => (
            <div key={key} className="flex flex-col gap-1.5">
              <p htmlFor={key} className="text-xs">
                {label}
              </p>
              <Input
                id={key}
                type={type}
                value={form[key]}
                onChange={(e) => set(key, type === 'number' ? Number(e.target.value) : e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-xs">Features (comma separated)</p>
          <Input
            value={form.features?.join(', ') ?? ''}
            onChange={(e) =>
              set(
                'features',
                e.target.value
                  .split(',')
                  .map((f) => f.trim())
                  .filter(Boolean),
              )
            }
          />
        </div>
        <DialogFooter className="mt-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onSave(form);
              onClose();
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
