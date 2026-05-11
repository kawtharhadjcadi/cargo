import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import ExploreMore from './components/ExploreMore';
import ImageGallery from './components/ImageGallery';
import { Input } from '@/components/ui/input';
import Lightbox from './components/Lightbox';
import MessageForm from './components/MessageForm';
import SpecItem from './components/SpecItem';
import dataCars from '../../../../data/dataCars.json';
import { useState } from 'react';

const SelectedProduct = () => {
  const { id } = useParams();
  const car = dataCars.find((c) => c.id === Number(id)) || dataCars[0];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const prevPhoto = () => setLightboxIndex((i) => (i - 1 + car.images.length) % car.images.length);
  const nextPhoto = () => setLightboxIndex((i) => (i + 1) % car.images.length);

  return (
    <div className="min-h-screen px-[45px]">
      {/* Lightbox */}

      {lightboxOpen && (
        <Lightbox
          images={car.images}
          current={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}

      <div className="mx-auto py-6">
        {/* Back link */}
        <Breadcrumb className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Acceul</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Voitures</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{car.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0">
            {/* Gallery */}
            <ImageGallery images={car.images} addedAgo={car.addedAgo} onOpenLightbox={openLightbox} />

            {/* Mobile: title + price + CTA buttons */}
            <div className="lg:hidden mt-5 bg-white rounded-2xl p-5 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900">{car.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{car.subtitle}</p>
              <p className="text-green-600 text-sm font-semibold mt-1">{car.highlight}</p>
              <p className="text-3xl font-bold mt-3">£{car.price.toLocaleString()}</p>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-full">
                  <Phone className="w-4 h-4 mr-2" /> Call dealer now
                </Button>
                <Button variant="outline" className="flex-1 rounded-full">
                  <Mail className="w-4 h-4 mr-2" /> Message dealer
                </Button>
              </div>
            </div>

            {/* Specs grid */}
            <div className="mt-4 bg-white rounded-2xl p-5 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                <SpecItem icon={Gauge} label="Mileage" value={`${car.mileage.toLocaleString()} miles`} />
                <SpecItem icon={Calendar} label="Year" value={`${car.year}`} />
                {/* <SpecItem icon={Shield}   label="History check" value={car.historyCheck} green /> */}
                <SpecItem icon={Settings} label="Engine" value={car.engine} />
                <SpecItem icon={Fuel} label="Fuel type" value={car.fuel} />
                <SpecItem icon={Car} label="Transmission" value={car.transmission} />
                <SpecItem icon={Car} label="Body Type" value={car.bodyType} />
                <SpecItem icon={DoorOpen} label="Doors" value={`${car.doors}`} />
                <SpecItem icon={Users} label="Seats" value={`${car.seats}`} />
                <SpecItem icon={Palette} label="Colour" value={car.colour} />
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-4 bg-white rounded-2xl p-5 shadow-sm">
              <Tabs defaultValue="features">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent gap-4 pb-0 mb-4">
                  {['features', 'specs', 'equipment', 'running-costs'].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none capitalize px-0"
                    >
                      {tab === 'running-costs' ? 'Running costs & ULEZ' : tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="features">
                  <ul className="grid grid-cols-2 gap-2">
                    {car.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specs">
                  <p className="text-sm text-muted-foreground">Full specs coming soon.</p>
                </TabsContent>
                <TabsContent value="equipment">
                  <p className="text-sm text-muted-foreground">Equipment list coming soon.</p>
                </TabsContent>
                <TabsContent value="running-costs">
                  <p className="text-sm text-muted-foreground">Running costs coming soon.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* ── RIGHT COLUMN (desktop only) ── */}
          <div className="hidden lg:flex flex-col w-96 shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-900">{car.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{car.subtitle}</p>
              <p className="text-green-600 text-sm font-semibold mt-1">{car.highlight}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline" className="bg-[#E8F0EA]">
                  {car.mileage.toLocaleString()} miles
                </Badge>
                <Badge variant="outline" className="bg-[#E8F0EA]">
                  {car.year}
                </Badge>
                <Badge variant="outline" className="bg-[#E8F0EA]">
                  {car.transmission}
                </Badge>
                <Badge variant="outline" className="bg-[#E8F0EA]">
                  {car.fuel}
                </Badge>
              </div>

              {/* Price */}
              <p className="text-4xl font-bold mt-4">£{car.price.toLocaleString()}</p>

              {/* Message form */}
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
      {/*otehrs*/}
      <div>
        <ExploreMore />
      </div>
    </div>
  );
};

export default SelectedProduct;
