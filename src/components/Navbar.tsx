'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link" // or 'react-router-dom'
import { ModeToggle } from "./toogleButton"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
]

export const Navbar = () => {
  return (
    <header className="    w-full px-4 py-2 bg-purple-500 dark:bg-background shadow-md fixed z-50">
      <div className="flex justify-between items-center max-w-7xl h-14 mx-auto">
        <Link href="/" className="text-3xl font-bold text-primary dark:text-purple-500">Animesh</Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg font-medium text-white dark:hover:text-purple-500 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="absolute right-15 sm:block md:relative"><ModeToggle/></div>
        

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className=" bg-purple-500 border-2 border-white text-white" variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-10 bg-purple-500  ">
              <nav className="flex flex-col gap-4 items-center mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
