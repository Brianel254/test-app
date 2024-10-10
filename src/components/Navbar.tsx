'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, FileText, MessageCircle, Car, Home, Heart, Briefcase, Plane, Building } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import ScheduleCallPopup from './ScheduleCallPopup'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScheduleCallOpen, setIsScheduleCallOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const megaMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog-2' }
  ]

  const services = [
    { name: 'Auto Insurance', icon: Car, href: '/services/auto' },
    { name: 'Home Insurance', icon: Home, href: '/services/home' },
    { name: 'Life Insurance', icon: Heart, href: '/services/life' },
    { name: 'Health Insurance', icon: Heart, href: '/services/health' },
    { name: 'Travel Insurance', icon: Plane, href: '/services/travel' },
    { name: 'Business Insurance', icon: Building, href: '/services/business' },
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
                <Link href="/" className="text-gray-800 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <div className="relative" ref={megaMenuRef}>
                  <button
                    className="text-gray-800 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  >
                    Our Services
                  </button>
                  {isMegaMenuOpen && (
                    <div className="absolute top-full left-2/3 transform -translate-x-1/2 w-screen max-w-4xl bg-white shadow-lg rounded-b-lg p-6">
                      <div className="grid grid-cols-9 gap-6">
                        <div className="col-span-3">
                          <Image
                            src="/get-insured.jpg?height=200&width=300"
                            alt="Get Insured"
                            width={300}
                            height={200}
                            className="rounded-lg mb-4"
                          />
                          <h3 className="text-lg font-semibold mb-2">Are you ready to get insured? </h3>
                          <Link href="/get-a-quote">
                            <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                              Get a Quote
                            </Button>
                          </Link>
                        </div>
                        <div className="col-span-3">
                          <ul className="space-y-4">
                            <li>
                              <Link href="/claims" className="flex items-start">
                                <FileText className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                <div>
                                  <h4 className="font-semibold">File a Claim</h4>
                                  <p className="text-sm text-gray-600">Start your claim process here</p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="/contact" className="flex items-start">
                                <MessageCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                <div>
                                  <h4 className="font-semibold">Contact Us</h4>
                                  <p className="text-sm text-gray-600">Get in touch with our team</p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                          {/* services list */}
                          <h3 className="text-lg font-semibold my-4">Our Services</h3>
                          <ul className="grid grid-cols-2 gap-5  overflow-x-visible text-nowrap">
                            {services.map((service) => (
                              <li key={service.name}>
                                <Link href={service.href} className="flex items-center">
                                  <service.icon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-sm">{service.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* social icons */}
                        <div className="col-span-3 h-fit">
                          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                          <ul className="space-y-4">
                            <li>
                              <Link href="https://wa.me/+254733844802" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="h-6 w-6 text-green-500 mr-2" />
                                <span className="text-sm">WhatsApp</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://www.facebook.com/jimmysinsuranceagency" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6 text-blue-500 mr-2" />
                                <span className="text-sm">Facebook</span>
                              </Link>
                            </li>
                            <li>
                              <a href="tel:+254733844802" className="flex items-center">
                                <img src="/phone-icon.svg" alt="Call" className="h-6 w-6 text-green-500 mr-2" />
                                <span className="text-sm">Call Us</span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        
                      </div>
                    </div>
                  )}
                </div>
                {menuItems.slice(1).map((item) => (
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
              <Link
                href="/"
                className="flex items-center justify-center h-32 bg-gray-100 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl font-medium">Home</span>
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center h-32 bg-gray-100 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl font-medium">Our Services</span>
              </Link>
              <Link
                href="/blog-2"
                className="flex items-center justify-center h-32 bg-gray-100 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl font-medium">Blog</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center h-32 bg-gray-100 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl font-medium">Contact</span>
              </Link>
              <Link
                href="/get-insured"
                className="flex items-center justify-center h-32 bg-gray-100 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl font-medium">Get Insured</span>
              </Link>
              <Link
                href="/claims"
                className="flex items-center justify-center h-32 bg-gray-100 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl font-medium">File a Claim</span>
              </Link>
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