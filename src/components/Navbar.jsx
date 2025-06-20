"use client"

import React from "react"
import { Phone, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Desktop/Tablet Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3 hidden sm:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-green-400 font-bold text-xl pr-5">404-JUNK</div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-green-400 transition-colors">
              Pricing
            </a>
            <a href="#locations" className="text-gray-300 hover:text-green-400 transition-colors">
              Locations
            </a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
              About
            </a>
            <div className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
              <Phone size={16} />
              <span className="text-white font-medium">604-505-5865</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3 sm:hidden">
        <div className="flex items-center justify-between">
          <div className="text-green-400 font-bold text-xl">404-JUNK</div>
          <button className="text-gray-300 p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-700 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="text-green-400 font-bold text-xl">404-JUNK</div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 p-1" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col p-6 space-y-6">
            <a
              href="#services"
              className="text-gray-300 hover:text-green-400 transition-colors text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-green-400 transition-colors text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#locations"
              className="text-gray-300 hover:text-green-400 transition-colors text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-green-400 transition-colors text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            {/* Phone Button */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-6 py-4 rounded-full transition-colors">
                <Phone size={20} />
                <span className="text-white font-semibold text-lg">604-505-5865</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 text-center">
              <p className="text-gray-400 text-sm">Pay by Weight, Not by Chance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
