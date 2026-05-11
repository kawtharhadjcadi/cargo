import {
  Calendar,
  Camera,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  Fuel,
  Gauge,
  Heart,
  Info,
  Mail,
  MapPin,
  Palette,
  Phone,
  Settings,
  Shield,
  Users,
  X,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const Lightbox = ({ images, current, onClose, onPrev, onNext }) => {
  React.useEffect(() => {}, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-center py-4 relative">
        <span className="text-white text-sm font-medium">
          {current + 1} of {images.length}
        </span>
        <button onClick={onClose} className="absolute right-4 top-3 text-white hover:text-gray-300 transition">
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Main image */}
      <div className="flex-1 flex items-center justify-center relative px-16">
        <button onClick={onPrev} className="absolute left-4 bg-white rounded-lg p-2 hover:bg-gray-100 transition">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={images[current]}
          alt={`Photo ${current + 1}`}
          className="max-h-full max-w-full object-contain rounded-xl"
        />

        <button onClick={onNext} className="absolute right-4 bg-white rounded-lg p-2 hover:bg-gray-100 transition">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-center gap-4 py-6">
        <Button variant="outline" className="rounded-full px-6 bg-white text-black hover:bg-gray-100">
          <Phone className="w-4 h-4 mr-2" /> Show phone number
        </Button>
        <Button variant="outline" className="rounded-full px-6 bg-white text-black hover:bg-gray-100">
          <Mail className="w-4 h-4 mr-2" /> Message
        </Button>
      </div>
    </div>
  );
};

export default Lightbox;
