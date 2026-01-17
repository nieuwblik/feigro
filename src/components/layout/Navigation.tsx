import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainNavigation.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={child.href}
                            className={cn(
                              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                              'hover:bg-feigro-accent/10 hover:text-feigro-accent focus:bg-feigro-accent/10 focus:text-feigro-accent'
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {child.label}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link to={item.href}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-transparent hover:bg-white/10 text-white'
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
