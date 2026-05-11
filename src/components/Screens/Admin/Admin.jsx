import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';

import AlertCircle from '../../Icons/User';
import { Badge } from '@/components/ui/badge';
import Bell from '../../Icons/User';
import { Button } from '@/components/ui/button';
import Car from '../../Icons/Car';
import ChevronRight from '../../Icons/User';
import Commandes from './Components/Commandes';
import Gestion from './Components/Gestion';
import LayoutDashboard from '../../Icons/Dashboard';
import LogOut from '../../Icons/User';
import Package from '../../Icons/Car';
import { Separator } from '@/components/ui/separator';
import Settings from '../../Icons/Settings';
import ShoppingCart from '../../Icons/Cart';
import { TooltipProvider } from '@/components/ui/tooltip';
import TrendingUp from '../../Icons/User';
import Users from '../../Icons/User';

const mainNav = [
  // { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard, badge: null },
  { id: 'products', label: 'Voitures', icon: Package, badge: null },
  { id: 'commandes', label: 'Messages des clients', icon: ShoppingCart, badge: null },
  // { id: 'clients', label: 'Clients', icon: Users, badge: null },
];

// ── Page content ──────────────────────────────────────────────────────────────
const pageData = {
  dashboard: {
    title: 'Tableau de bord',
    stats: [
      { label: 'Revenu total', value: '€48,295', trend: '+12.5%', up: true },
      { label: 'Commandes', value: '1,284', trend: '+8.2%', up: true },
      { label: 'Véhicules de flotte', value: '64', trend: '+2 ce mois', up: true },
      { label: 'Utilisateurs actifs', value: '5,920', trend: '+18.7%', up: true },
    ],
    component: <Gestion />,
  },
  products: {
    title: 'Voitures',
    stats: [
      { label: 'Total', value: '342', trend: 'en catalogue', up: true },
      { label: 'Stock faible', value: '18', trend: 'nécessite restockage', up: false },
      { label: 'Rupture de stock', value: '5', trend: 'urgent', up: false },
      { label: 'Catégories', value: '24', trend: 'actives', up: true },
    ],
    component: <Gestion />,
  },
  commandes: {
    title: 'Messages des clients',
    stats: [
      { label: 'En attente', value: '12', trend: 'à traiter', up: false },
      { label: 'Expédié', value: '87', trend: 'en transit', up: true },
      { label: 'Livré', value: '1,184', trend: 'complété', up: true },
      { label: 'Retourné', value: '3', trend: 'cette semaine', up: false },
    ],
    component: <Commandes />,
  },
  clients: {
    title: 'Clients',
    stats: [
      { label: 'Total', value: '5,920', trend: 'enregistrés', up: true },
      { label: 'Actif', value: '2,310', trend: 'derniers 30 jours', up: true },
      { label: 'Nouveau', value: '148', trend: 'ce mois', up: true },
      { label: 'VIP', value: '64', trend: 'membres', up: true },
    ],
    component: <Gestion />,
  },
};

const Admin = () => {
  const [active, setActive] = useState('dashboard');
  const page = pageData[active];

  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar variant="inset" collapsible="icon">
          {/* Header */}
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" onClick={() => setActive('dashboard')}>
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <LayoutDashboard className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Panneau Admin</span>
                    <span className="truncate text-xs text-muted-foreground">Gestion</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          {/* Content */}
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {mainNav.map(({ id, label, icon: Icon, badge }) => (
                  <SidebarMenuItem key={id}>
                    <SidebarMenuButton isActive={active === id} tooltip={label} onClick={() => setActive(id)}>
                      <Icon />
                      <span>{label}</span>
                    </SidebarMenuButton>
                    {badge !== null && <SidebarMenuBadge>{badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          {/* Footer / User dropdown */}
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src="" alt="Admin" />
                        <AvatarFallback className="rounded-lg bg-primary text-primary-foreground text-xs font-bold">
                          AD
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">Utilisateur Admin</span>
                        <span className="truncate text-xs text-muted-foreground">admin@store.com</span>
                      </div>
                      <ChevronRight className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    side="bottom"
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <LogOut className="mr-2 size-4" />
                      Déconnexion
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>

          <SidebarRail />
        </Sidebar>

        {/* ── Main ── */}
        <SidebarInset>
          {/* Topbar */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{page.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          {/* Body */}
          <div className="flex flex-1 flex-col gap-6 p-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{page.title}</h1>
              {/* <p className="text-sm text-muted-foreground mt-1">
              Bienvenue, Admin — voici ce qui se passe.
            </p> */}
            </div>

            {page.component}

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Gestion />
            {page.stats.map((s) => (
              <div key={s.label} className="rounded-xl border bg-card p-4 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
                  {s.up
                    ? <TrendingUp className="size-3.5 text-emerald-500" />
                    : <AlertCircle className="size-3.5 text-rose-500" />
                  }
                </div>
                <p className="text-2xl font-bold">{s.value}</p>
                <Badge variant={s.up ? "secondary" : "destructive"} className="w-fit text-xs">
                  {s.trend}
                </Badge>
              </div>
            ))}
          </div> */}

            {/* Placeholder table */}
            {/* <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h2 className="text-sm font-semibold">Récent {page.title}</h2>
              <Button variant="ghost" size="sm" className="text-xs h-7">Voir tout →</Button>
            </div>
            <div className="divide-y">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 px-5 py-3">
                  <Gestion /> 
                  <div className="size-9 rounded-lg bg-muted animate-pulse flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-muted rounded animate-pulse w-36" />
                    <div className="h-2.5 bg-muted/70 rounded animate-pulse w-24" />
                  </div>
                  <div className="h-5 bg-muted rounded-full animate-pulse w-16" />
                  <div className="h-3 bg-muted rounded animate-pulse w-14" />
                </div>
              ))}
            </div>
          </div> */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default Admin;
