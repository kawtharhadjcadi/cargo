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

const SpecItem = ({ icon: Icon, label, value, green }) => {
  React.useEffect(() => {}, []);

  return (
    <div className="flex items-start gap-3">
      <div className="text-gray-400 mt-0.5">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className={`text-sm font-semibold ${green ? 'text-green-600' : 'text-gray-900'}`}>
          {green && <Check className="w-3 h-3 inline mr-1" />}
          {value}
        </p>
      </div>
    </div>
  );
};

export default SpecItem;
