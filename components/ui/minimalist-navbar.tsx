"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import React, { useEffect, useState } from "react"
import { SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function MinimalistNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "px-20 py-2 mx-auto mt-4" 
          : ""
      )}
    >
      <nav 
        className={cn(
          "max-w-7xl mx-auto transition-all duration-300 flex items-center justify-between",
          scrolled 
            ? "rounded-full bg-[#0F1117]/80 backdrop-blur-md px-6 py-2" 
            : "h-16 px-4"
        )}
      >
        <Link href="/" className="flex items-center space-x-2">
          <div className={cn(
            "relative transition-all duration-300",
            scrolled ? "h-14 w-32" : "h-12 w-40"
          )}>
            <Image
              src={scrolled ? "/images/logo-dark.png" : "/images/logo-dark.png"}
              alt="Muveo Inc Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className={cn(
              "transition-colors text-sm",
              scrolled 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={cn(
              "transition-colors text-sm",
              scrolled 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            scrolled ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          )}
          onClick={() => setIsOpen(true)}
        >
          <Menu className={cn(
            "transition-all duration-300",
            scrolled ? "h-5 w-5" : "h-6 w-6"
          )} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </nav>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[300px] bg-[#0F1117]">
          <SheetHeader>
            <SheetTitle className="text-left text-white">Menu</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </header>
  )
} 