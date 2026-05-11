import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Calendar,
  Car,
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  Fuel,
  Gauge,
  MoreHorizontalIcon,
  Palette,
  Users,
} from 'lucide-react';
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
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const ViewModal = ({ car, onClose, onEdit }) => {
  if (!car) return null;
  const specs = [
    { icon: <Calendar className="h-4 w-4" />, label: 'Year', value: car.year },
    { icon: <Gauge className="h-4 w-4" />, label: 'Mileage', value: `${car.mileage.toLocaleString()} mi` },
    { icon: <Fuel className="h-4 w-4" />, label: 'Fuel', value: car.fuel },
    { icon: <Car className="h-4 w-4" />, label: 'Transmission', value: car.transmission },
    { icon: <Car className="h-4 w-4" />, label: 'Engine', value: car.engine },
    { icon: <Car className="h-4 w-4" />, label: 'Body', value: car.bodyType },
    { icon: <DoorOpen className="h-4 w-4" />, label: 'Doors', value: car.doors },
    { icon: <Users className="h-4 w-4" />, label: 'Seats', value: car.seats },
    { icon: <Palette className="h-4 w-4" />, label: 'Colour', value: car.colour },
  ];

  return (
    <Dialog open onOpenChange={onClose} className="max-w-2xl">
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{car.name}</DialogTitle>
          <DialogDescription className="text-2xl font-bold text-foreground">
            £{car.price.toLocaleString()}
          </DialogDescription>
        </DialogHeader>
        <ImageCarousel images={car.images} name={car.name} />
        <div className="grid grid-cols-3 gap-2 mt-1">
          {specs.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 rounded-lg bg-muted/50 p-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                {s.icon} {s.label}
              </span>
              <span className="text-sm font-medium">{s.value}</span>
            </div>
          ))}
        </div>
        {car.features?.length > 0 && (
          <div className="mt-1">
            <p className="mb-2 text-sm font-semibold">Features</p>
            <div className="flex flex-wrap gap-2">
              {car.features.map((f) => (
                <span key={f} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-1">
          Added {car.addedAgo} · Ref #{car.reference}
        </p>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={() => {
              onClose();
              onEdit(car);
            }}
          >
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewModal;
