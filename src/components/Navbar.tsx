'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import ScheduleCallPopup from './ScheduleCallPopup'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScheduleCallOpen, setIsScheduleCallOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Get Insured', href: '/get-insured' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 0 ? 'bg-white/80 backdrop-blur-md shadow-md' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Jimmy's Insurance Agency Logo"
                  width={150}
                  height={31}
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <Button
                className="bg-green-500 text-white hover:bg-green-600"
                onClick={() => setIsScheduleCallOpen(true)}
              >
                <Phone className="mr-2 h-4 w-4" /> Schedule a Call
              </Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Jimmy's Insurance Agency Logo"
                  width={150}
                  height={31}
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 text-gray-800 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-grow grid grid-cols-2 gap-4 p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center h-32 bg-gray-100 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="p-4">
              <Button
                className="w-full bg-green-500 text-white hover:bg-green-600"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsScheduleCallOpen(true)
                }}
              >
                <Phone className="mr-2 h-4 w-4" /> Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      )}

      <ScheduleCallPopup
        isOpen={isScheduleCallOpen}
        onClose={() => setIsScheduleCallOpen(false)}
      />
    </>
  )
}