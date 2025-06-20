import React from "react"
import { Phone, Menu, X } from "lucide-react"


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4 pr-4">
          <div className="text-green-400 font-bold text-xl">404-JUNK</div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
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
            <span className="text-white cursor-pointer font-medium">604-505-5865</span>
          </div>

    
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
          <div className="flex flex-col space-y-3">
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
            <div className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors w-fit">
              <Phone size={16} />
              <span className="text-white font-medium">604-505-5865</span>
            </div>
          </div>
        </div>
      )}
      
    </nav>
    
    
  )
}

export default Navbar
