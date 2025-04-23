"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { LogOut, User, Search, Menu, X } from "lucide-react";
import { ModeToggle } from "../modeSwitcher";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="border-b-2 p-3 relative z-50">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <p className="text-[1.5rem] font-extrabold">CASINO</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            asChild
            className="cursor-pointer hover:text-[#FFD700]"
          >
            <Link href="/virtual-slots">Slots</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="cursor-pointer hover:text-[#FFD700]"
          >
            <Link href="/virtual-blackjack">Blackjack</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="cursor-pointer hover:text-[#FFD700]"
          >
            <Link href="/virtual-roulette">Roulette</Link>
          </Button>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#FFD700] cursor-pointer">
                  More Games
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-[#FFD700] p-4">
                  <div className="grid grid-cols-2 gap-4  w-[700px]">
                    <div className="col-span-1 w-full h-full">
                      <Image
                        src="https://img.freepik.com/free-vector/realistic-casino-gambling-illustration_52683-99917.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740"
                        alt="Casino Games"
                        width={320}
                        height={240}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                      {[
                        "baccarat",
                        "poker",
                        "craps",
                        "keno",
                        "sic-bo",
                        "dice",
                      ].map((game) => (
                        <Link
                          key={game}
                          href={`/virtual-${game}`}
                          className="hover:text-[#FFD700]"
                        >
                          Virtual {game.charAt(0).toUpperCase() + game.slice(1)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search and Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative w-full max-w-[180px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#FFD700]" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 text-sm border-gold focus:ring-[#FFD700]"
            />
          </div>
          <Button
            variant="outline"
            className="text-sm cursor-pointer text-[#FFD700] border-[#FFD700] hover:text-[#FFD700]"
          >
            Contact Support
          </Button>
          <Button variant="outline" size="icon" className="border-[#FFD700]">
            <User
              className="text-[#FFD700] hover:scale-105 transition"
              size={28}
            />
          </Button>
          <Button variant="outline" size="icon" className="border-[#FFD700]">
            <LogOut
              className="text-[#FFD700] hover:scale-105 transition"
              size={28}
            />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-[#FFD700]" />
            ) : (
              <Menu className="text-[#FFD700]" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <p className="text-[1.5rem] font-extrabold text-[#FFD700]">
                CASINO
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="text-[#FFD700]" />
            </Button>
          </div>

          <Link
            href="/virtual-slots"
            className="block hover:text-[#FFD700]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Slots
          </Link>
          <Link
            href="/virtual-blackjack"
            className="block hover:text-[#FFD700]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blackjack
          </Link>
          <Link
            href="/virtual-roulette"
            className="block hover:text-[#FFD700]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Roulette
          </Link>
          {["baccarat", "poker", "craps", "keno", "sic-bo", "dice"].map(
            (game) => (
              <Link
                key={game}
                href={`/virtual-${game}`}
                className="block hover:text-[#FFD700]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Virtual {game.charAt(0).toUpperCase() + game.slice(1)}
              </Link>
            )
          )}

          <div className="pt-4 border-t border-[#FFD700]">
            <Input type="text" placeholder="Search..." className="text-sm" />
            <Button
              variant="outline"
              className="mt-2 cursor-pointer w-full border-[#FFD700] text-[#FFD700]"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
