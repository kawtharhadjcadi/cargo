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

const ImageGallery = ({ images, addedAgo, onOpenLightbox }) => {
  const [current, setCurrent] = useState(0);
  const [favourite, setFavourite] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div>
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(current)}>
        <img src={images[current]} alt="Car" className="w-full h-72 lg:h-96 object-cover" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          <Camera className="w-3 h-3" />
          <span>{images.length}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setFavourite(!favourite);
          }}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition"
        >
          <Heart className={`w-4 h-4 ${favourite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>

        {/* Bottom badges */}
        <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          Added {addedAgo}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenLightbox(current);
          }}
          className="absolute bottom-3 right-3 bg-white/90 text-black text-xs px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-white transition"
        >
          <Camera className="w-3 h-3" /> View gallery
        </button>

        {/* Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-20 h-14 object-cover rounded-lg cursor-pointer transition border-2 ${
              current === i ? 'border-green-600' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
