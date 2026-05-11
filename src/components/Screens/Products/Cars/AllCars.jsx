import { Badge } from '@/components/ui/badge';
import Favorite from '../../../Icons/Favorite';
import { MapPin } from 'lucide-react';
import history from '../../../routes/history';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AllCars({ car }) {
  const navigate = useNavigate();

  const [isFavourite, setIsFavourite] = useState(car.favourite);

  return (
    <div
      className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={() => navigate(`/item/${car.id}`)}
    >
      {/* Image */}
      <div className="relative">
        <img src={car.images?.[0]} alt={car.name} className="w-full h-48 object-cover" />
        {car.badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            {car.badge}
          </span>
        )}
        <button
          className="absolute top-3 right-3  rounded-full shadow-md hover:scale-110 transition"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavourite(!isFavourite);
          }}
        >
          <Favorite className={`w-4 h-4 ${isFavourite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name + Price */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">{car.name}</h3>
          <p className="text-sm font-bold text-gray-900 whitespace-nowrap">{car.price.toLocaleString()} €</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-xs text-gray-400">{car.year}</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-400">{car.mileage.toLocaleString()} km</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-400">{car.fuel}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {car.features?.slice(0, 3).map((f) => (
            <span key={f} className="text-[11px] bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
