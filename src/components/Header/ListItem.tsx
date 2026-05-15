import { Link } from 'react-router-dom';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import React from 'react';

type ListItemProps = React.ComponentPropsWithoutRef<'li'> & {
  href: string;
  title: string;
};

function ListItem({ title, children, href, ...props }: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default ListItem;
