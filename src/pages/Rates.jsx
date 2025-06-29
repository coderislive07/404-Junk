"use client"
import React, { useState } from "react"
import {
  Scale,
  Home,
  Building,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Mail,
} from "lucide-react"


export default function Rates() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedWeight, setSelectedWeight] = useState(null)
  const [showBooking, setShowBooking] = useState(false)
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  })

  const services = [
    {
      id: "pullup",
      name: "Pull Up",
      icon: Home,
      description: "Curbside pickup service - items placed at curb",
      features: ["Curbside pickup only", "No stairs or carrying", "Quick and efficient", "Most affordable option"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "outside",
      name: "Outside + House",
      icon: Home,
      description: "Outdoor items and house exterior cleanup",
      features: ["Yard waste removal", "Outdoor furniture", "Shed cleanouts", "Deck/patio items"],
      color: "from-green-500 to-green-600",
    },
    {
      id: "inside",
      name: "Inside + House",
      icon: Building,
      description: "Interior home junk removal service",
      features: ["Furniture removal", "Appliance pickup", "Room cleanouts", "Basement/attic clearing"],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "apartment",
      name: "Apartment",
      icon: MapPin,
      description: "Specialized apartment and condo service",
      features: ["Small space optimization", "Elevator access", "Tight space navigation", "Quick turnaround"],
      color: "from-orange-500 to-orange-600",
    },
  ]

  const getWeightOptions = (serviceType) => {
    const basePrices = {
      pullup: [140, 280, 280, 350, 420, 490, 560],
      outside: [140, 280, 280, 350, 420, 490, 560],
      inside: [140, 280, 280, 350, 420, 490, 560],
      apartment: [180, 250, 320, 390, 460, 530, 600],
    }

    const ranges = [
      "Under 400 lbs",
      "400-500 lbs",
      "500-600 lbs",
      "600-700 lbs",
      "700-800 lbs",
      "800-900 lbs",
      "900-1000 lbs",
    ]

    return ranges.map((range, index) => ({
      range,
      price: basePrices[serviceType]?.[index] || 140,
      id: `range-${index}`,
    }))
  }

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setSelectedWeight(null)
    setShowBooking(false)
  }

  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight)
  }

  const handleBookNow = () => {
    setShowBooking(true)
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission here
    alert("Booking submitted successfully! We'll contact you shortly.")
    setShowBooking(false)
    setSelectedService(null)
    setSelectedWeight(null)
  }

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">


      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
            <Scale className="text-green-400" size={20} />
            <span className="text-green-400 font-medium">Transparent Weight-Based Pricing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Rates
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your service type and see exactly what you'll pay. No hidden fees, no surprises - just fair,
            weight-based pricing.
          </p>
        </div>
      </section>

      {!showBooking ? (
        <>
          {/* Service Selection */}
          <section className="py-16 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Service Type</h2>
                <p className="text-gray-400">Select the service that best fits your needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`relative overflow-hidden rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        selectedService?.id === service.id
                          ? "border-green-500 bg-green-500/10"
                          : "border-gray-700 bg-gray-800/50 hover:border-green-500/50"
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>
                      <div className="relative p-6">
                        <IconComponent className="text-green-400 mx-auto mb-4" size={48} />
                        <h3 className="text-xl font-bold mb-2 text-center">{service.name}</h3>
                        <p className="text-gray-400 text-sm text-center mb-4">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Weight and Pricing Selection */}
          {selectedService && (
            <section className="py-16 bg-gray-900/50">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing for {selectedService.name}</h2>
                  <p className="text-gray-400">Select your estimated weight range to see the exact price</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getWeightOptions(selectedService.id).map((option, index) => (
                    <div
                      key={option.id}
                      onClick={() => handleWeightSelect(option)}
                      className={`relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        selectedWeight?.id === option.id
                          ? "border-green-500 bg-green-500/10"
                          : "border-gray-700 bg-gray-800/50 hover:border-green-500/50"
                      }`}
                    >
                      <div className="p-6 text-center">
                        <div className="text-2xl font-bold mb-2">{option.range}</div>
                        <div className="text-3xl font-bold text-green-400 mb-4">${option.price}</div>
                        <div className="text-sm text-gray-400">
                          {index === 0 ? "Starting price" : "All-inclusive rate"}
                        </div>
                      </div>
                      {selectedWeight?.id === option.id && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="text-green-400" size={24} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {selectedWeight && (
                  <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Selected: {selectedService.name} - {selectedWeight.range}
                    </h3>
                    <div className="text-4xl font-bold text-green-400 mb-4">${selectedWeight.price}</div>
                    <p className="text-gray-400 mb-6">
                      This price includes pickup, weighing, hauling, and responsible disposal. No hidden fees.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={handleBookNow}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Calendar size={20} />
                        <span>BOOK NOW</span>
                      </button>
                      <div className="flex items-center justify-center space-x-2 border border-gray-600 hover:border-green-400 px-8 py-4 rounded-full transition-colors">
                        <Phone size={20} />
                        <span className="font-semibold">604-505-5865</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </>
      ) : (
        /* Booking Form */
        <section className="py-16 bg-gray-950">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <button onClick={() => setShowBooking(false)} className="text-gray-400 hover:text-green-400 mr-4">
                  <ArrowLeft size={24} />
                </button>
                <h2 className="text-2xl font-bold">Book Your Service</h2>
              </div>

              <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{selectedService?.name}</div>
                    <div className="text-sm text-gray-400">{selectedWeight?.range}</div>
                  </div>
                  <div className="text-2xl font-bold text-green-400">${selectedWeight?.price}</div>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="inline mr-2" size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={bookingData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={bookingData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="inline mr-2" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={bookingData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Calendar className="inline mr-2" size={16} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={bookingData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Clock className="inline mr-2" size={16} />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={bookingData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                      <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                      <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes</label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={bookingData.notes}
                    onChange={handleInputChange}
                    placeholder="Please describe the items you need removed, access details, or any special requirements..."
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Confirm Booking</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

 
    </div>
  )
}
