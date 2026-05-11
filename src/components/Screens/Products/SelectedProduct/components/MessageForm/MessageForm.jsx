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
import { Textarea } from '@/components/ui/textarea';

const MessageForm = () => {
  const enquiries = [
    // { id: 'test-drive', label: 'Book a test drive' },
    { id: 'reserve', label: 'Reserve a vehicle' },
    { id: 'available', label: 'Is it still available?' },
    { id: 'question', label: 'Ask a question' },
  ];

  return (
    <div className="border border-input rounded-2xl p-5 mt-4">
      <h3 className="font-semibold text-base mb-3">Pre commande!</h3>
      <p className="text-sm text-muted-foreground mb-3">What's your enquiry about? *</p>

      {/* Enquiry checkboxes */}
      {/* <div className="grid grid-cols-2 gap-2 mb-4">
        {enquiries.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <Checkbox id={e.id} />
            <label htmlFor={e.id} className="text-sm cursor-pointer">{e.label}</label>
          </div>
        ))}
      </div> */}

      {/* Form fields */}
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Input placeholder="First name *" />
          <Input placeholder="Last name *" />
        </div>
        <Input placeholder="Email address *" type="email" />
        <Input placeholder="Phone number *" type="tel" />
        <Textarea placeholder="Type a message here." />

        <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full mt-1">
          <Mail className="w-4 h-4 mr-2" /> Envoyer
        </Button>
      </div>
    </div>
  );
};

export default MessageForm;
