"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="w-full bg-yankees-blue text-yankees-white shadow-md fixed top-0 z-50 flex items-center justify-between px-6 py-4">
      <span className="font-bold text-xl text-yankees-accent">
        New York Yankees
      </span>
      <NavigationMenu>
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem>
            <Link href="/history" passHref legacyBehavior>
              <NavigationMenuLink className="px-4 py-2 rounded-md hover:bg-gray-100 transition">
                History
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/rivalries" passHref legacyBehavior>
              <NavigationMenuLink className="px-4 py-2 rounded-md hover:bg-gray-100 transition">
                Rivalries
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/world-series" passHref legacyBehavior>
              <NavigationMenuLink className="px-4 py-2 rounded-md hover:bg-gray-100 transition">
                World Series Wins
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/best-players" passHref legacyBehavior>
              <NavigationMenuLink className="px-4 py-2 rounded-md hover:bg-gray-100 transition">
                Best Yankees Players
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
