import { Badge } from '@/components/ui/badge';
import Favorite from '../../../../Icons/Favorite';
import { useState } from 'react';

export default function CarCard({ car }) {
  const [isFavourite, setIsFavourite] = useState(car.favourite);

  return (
    <div className="overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-100">
      {/* Image */}
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-52 object-cover" />
      </div>

      {/* Info — below image, no extra spacing */}
      <div className="px-4 py-3">
        <p className="text-lg font-bold text-gray-900 mb-0.5">{car.price.toLocaleString()} €</p>
        <h3 className="text-sm font-medium text-gray-700 mb-2">{car.name}</h3>
        <div className="flex gap-3 text-xs text-gray-400">
          <Badge variant="outline" className="bg-[#E8F0EA]">
            {car.year}
          </Badge>
          <Badge variant="outline" className="bg-[#E8F0EA]">
            {car.fuel}
          </Badge>
          <Badge variant="outline" className="bg-[#E8F0EA]">
            {car.transmission}
          </Badge>
        </div>
      </div>
    </div>
  );
}
