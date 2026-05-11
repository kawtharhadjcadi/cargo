import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Mail, MoreHorizontalIcon, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Commandes = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      phone: '+33 7 00 12 34 56',
      enquiryType: 'Réserver un véhicule',
      enquiryText: 'Est-ce encore disponible ?',
      carReference: 45,
      carName: '2020 BMW Série 3',
      createdAt: '2024-01-15',
      status: 'new',
    },
    {
      id: 2,
      firstName: 'Sarah',
      lastName: 'Martin',
      email: 'sarah.m@gmail.com',
      phone: '+33 7 11 22 33 44',
      enquiryType: 'Poser une question',
      enquiryText: "Cette voiture a-t-elle un historique d'entretien complet ?",
      carReference: 52,
      carName: '2018 Mercedes-Benz Classe C',
      createdAt: '2024-01-14',
      status: 'responded',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Bernard',
      email: 'm.bernard@outlook.com',
      phone: '+33 7 55 66 77 88',
      enquiryType: 'Réserver un véhicule',
      enquiryText: 'Puis-je organiser un essai routier ?',
      carReference: 38,
      carName: '2022 Audi A4',
      createdAt: '2024-01-13',
      status: 'new',
    },
    {
      id: 4,
      firstName: 'Emma',
      lastName: 'Leclerc',
      email: 'emma.leclerc@yahoo.com',
      phone: '+33 7 99 88 77 66',
      enquiryType: 'Poser une question',
      enquiryText: 'Quel est votre meilleur prix ?',
      carReference: 61,
      carName: '2019 Volkswagen Golf',
      createdAt: '2024-01-12',
      status: 'new',
    },
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Nouveau</Badge>;
      case 'responded':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Répondu</Badge>;
      case 'archived':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Archivé</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getEnquiryBadge = (enquiryType) => {
    if (enquiryType === 'Réserver un véhicule') {
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Réservation</Badge>;
    }
    return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Question</Badge>;
  };

  const handleMarkAsResponded = (id) => {
    setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, status: 'responded' } : msg)));
  };

  const handleDelete = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <>
      <div className="mb-4">
        <p className="text-muted-foreground">Messages totaux : {messages.length}</p>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-semibold">Client</TableHead>
              <TableHead className="font-semibold">Contact</TableHead>
              {/* <TableHead className="font-semibold">Demande</TableHead> */}
              <TableHead className="font-semibold">Message</TableHead>
              <TableHead className="font-semibold">Véhicule</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Statut</TableHead>
              <TableHead className="text-right font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.length > 0 ? (
              messages.map((message, idx) => (
                <TableRow
                  key={message.id}
                  className={`hover:bg-slate-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                >
                  {/* Customer Name */}
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm">
                        {message.firstName} {message.lastName}
                      </p>
                    </div>
                  </TableCell>

                  {/* Contact Info */}
                  <TableCell>
                    <div className="flex flex-col gap-1.5 text-xs">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{message.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs">{message.phone}</span>
                      </div>
                    </div>
                  </TableCell>

                  {/* Message Text */}
                  <TableCell>
                    <p className="text-sm line-clamp-2">{message.enquiryText}</p>
                  </TableCell>

                  {/* Vehicle Info */}
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium">{message.carName}</p>
                      <p className="text-xs text-muted-foreground">#{message.carReference}</p>
                    </div>
                  </TableCell>

                  {/* Date */}
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(message.createdAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </TableCell>

                  {/* Status */}
                  <TableCell>{getStatusBadge(message.status)}</TableCell>

                  {/* Actions */}
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Ouvrir le menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleMarkAsResponded(message.id)}>
                          Marquer comme répondu
                        </DropdownMenuItem>
                        <DropdownMenuItem>Voir le message complet</DropdownMenuItem>
                        <DropdownMenuItem>Répondre au client</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive" onClick={() => handleDelete(message.id)}>
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="8" className="text-center py-8 text-muted-foreground">
                  Aucun message client pour le moment
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Commandes;
