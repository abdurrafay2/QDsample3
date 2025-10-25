'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingConfirmation from './BookingConfirmation'

type TabType = 'hotels' | 'airlines' | 'transport'

interface FormData {
  hotels: {
    destination: string
    checkIn: string
    checkOut: string
    guests: string
  }
  airlines: {
    from: string
    to: string
    depart: string
    return: string
    passengers: string
  }
  transport: {
    pickUp: string
    dropOff: string
    dateTime: string
  }
}

interface FormErrors {
  hotels: Partial<FormData['hotels']>
  airlines: Partial<FormData['airlines']>
  transport: Partial<FormData['transport']>
}

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<TabType>('hotels')
  const [formData, setFormData] = useState<FormData>({
    hotels: {
      destination: '',
      checkIn: '',
      checkOut: '',
      guests: '1 Guest'
    },
    airlines: {
      from: '',
      to: '',
      depart: '',
      return: '',
      passengers: '1 Passenger'
    },
    transport: {
      pickUp: '',
      dropOff: '',
      dateTime: ''
    }
  })
  const [errors, setErrors] = useState<FormErrors>({
    hotels: {},
    airlines: {},
    transport: {}
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = { hotels: {}, airlines: {}, transport: {} }
    let isValid = true

    if (activeTab === 'hotels') {
      if (!formData.hotels.destination.trim()) {
        newErrors.hotels.destination = 'Destination is required'
        isValid = false
      }
      if (!formData.hotels.checkIn) {
        newErrors.hotels.checkIn = 'Check-in date is required'
        isValid = false
      }
      if (!formData.hotels.checkOut) {
        newErrors.hotels.checkOut = 'Check-out date is required'
        isValid = false
      }
      if (formData.hotels.checkIn && formData.hotels.checkOut && formData.hotels.checkIn >= formData.hotels.checkOut) {
        newErrors.hotels.checkOut = 'Check-out must be after check-in'
        isValid = false
      }
    } else if (activeTab === 'airlines') {
      if (!formData.airlines.from.trim()) {
        newErrors.airlines.from = 'Departure city is required'
        isValid = false
      }
      if (!formData.airlines.to.trim()) {
        newErrors.airlines.to = 'Destination city is required'
        isValid = false
      }
      if (!formData.airlines.depart) {
        newErrors.airlines.depart = 'Departure date is required'
        isValid = false
      }
      if (!formData.airlines.return) {
        newErrors.airlines.return = 'Return date is required'
        isValid = false
      }
      if (formData.airlines.depart && formData.airlines.return && formData.airlines.depart >= formData.airlines.return) {
        newErrors.airlines.return = 'Return date must be after departure'
        isValid = false
      }
    } else if (activeTab === 'transport') {
      if (!formData.transport.pickUp.trim()) {
        newErrors.transport.pickUp = 'Pick-up location is required'
        isValid = false
      }
      if (!formData.transport.dropOff.trim()) {
        newErrors.transport.dropOff = 'Drop-off location is required'
        isValid = false
      }
      if (!formData.transport.dateTime) {
        newErrors.transport.dateTime = 'Pick-up date and time is required'
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: value
      }
    }))
    
    // Clear error when user starts typing
    if (errors[activeTab][field as keyof typeof errors[typeof activeTab]]) {
      setErrors(prev => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          [field]: undefined
        }
      }))
    }
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    
    // Open confirmation modal
    setIsConfirmationOpen(true)
  }

  const tabs = [
    { 
      id: 'hotels', 
      label: 'Hotels',
      icon: '🏨',
      bgImage: '/hotel.jpg',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    { 
      id: 'airlines', 
      label: 'Airlines',
      icon: '✈️',
      bgImage: '/airline.jpg',
      gradient: 'from-sky-500/20 to-blue-500/20'
    },
    { 
      id: 'transport', 
      label: 'Transport',
      icon: '🚗',
      bgImage: '/transport.jpg',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
  ] as const

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto animate-slide-up hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
      {/* Background Image for Active Tab */}
      {activeTab === 'hotels' && (
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/hotel.jpg"
            alt="Hotel background"
            fill
            className="object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl"></div>
        </div>
      )}
      {activeTab === 'airlines' && (
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/airline.jpg"
            alt="Airline background"
            fill
            className="object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-3xl"></div>
        </div>
      )}
      {activeTab === 'transport' && (
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/transport.jpg"
            alt="Transport background"
            fill
            className="object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl"></div>
        </div>
      )}
      {/* Tab Navigation */}
      <div className="relative z-10 flex flex-col sm:flex-row border-b border-gray-200 mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-t-xl sm:rounded-t-2xl p-1 sm:p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-all duration-500 transform hover:scale-105 rounded-lg sm:rounded-xl mb-1 sm:mb-0 ${
              activeTab === tab.id
                ? `text-white bg-gradient-to-r ${tab.gradient} shadow-lg border-2 border-white/30`
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/70'
            }`}
          >
            <span className="text-sm sm:text-lg">{tab.icon}</span>
            <span className="hidden sm:block">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 sm:border-l-4 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-transparent border-t-white"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative z-10 space-y-6">
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-slide-in-left">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🏨 Destination
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                value={formData.hotels.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.hotels.destination ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
              />
              {errors.hotels.destination && (
                <p className="text-red-500 text-xs mt-1">{errors.hotels.destination}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Check-in
              </label>
              <input
                type="date"
                value={formData.hotels.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.hotels.checkIn ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
              />
              {errors.hotels.checkIn && (
                <p className="text-red-500 text-xs mt-1">{errors.hotels.checkIn}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Check-out
              </label>
              <input
                type="date"
                value={formData.hotels.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.hotels.checkOut ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
              />
              {errors.hotels.checkOut && (
                <p className="text-red-500 text-xs mt-1">{errors.hotels.checkOut}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                👥 Guests
              </label>
              <select 
                value={formData.hotels.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === 'airlines' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 animate-slide-in-right">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                ✈️ From
              </label>
              <input
                type="text"
                placeholder="Departure city"
                value={formData.airlines.from}
                onChange={(e) => handleInputChange('from', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.airlines.from ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-sky-500'
                }`}
              />
              {errors.airlines.from && (
                <p className="text-red-500 text-xs mt-1">{errors.airlines.from}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                ✈️ To
              </label>
              <input
                type="text"
                placeholder="Destination city"
                value={formData.airlines.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.airlines.to ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-sky-500'
                }`}
              />
              {errors.airlines.to && (
                <p className="text-red-500 text-xs mt-1">{errors.airlines.to}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Depart
              </label>
              <input
                type="date"
                value={formData.airlines.depart}
                onChange={(e) => handleInputChange('depart', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.airlines.depart ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-sky-500'
                }`}
              />
              {errors.airlines.depart && (
                <p className="text-red-500 text-xs mt-1">{errors.airlines.depart}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Return
              </label>
              <input
                type="date"
                value={formData.airlines.return}
                onChange={(e) => handleInputChange('return', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.airlines.return ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-sky-500'
                }`}
              />
              {errors.airlines.return && (
                <p className="text-red-500 text-xs mt-1">{errors.airlines.return}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                👥 Passengers
              </label>
              <select 
                value={formData.airlines.passengers}
                onChange={(e) => handleInputChange('passengers', e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              >
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === 'transport' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-slide-up">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🚗 Pick-up Location
              </label>
              <input
                type="text"
                placeholder="Where to pick you up?"
                value={formData.transport.pickUp}
                onChange={(e) => handleInputChange('pickUp', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.transport.pickUp ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-purple-500'
                }`}
              />
              {errors.transport.pickUp && (
                <p className="text-red-500 text-xs mt-1">{errors.transport.pickUp}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🚗 Drop-off Location
              </label>
              <input
                type="text"
                placeholder="Where to drop you off?"
                value={formData.transport.dropOff}
                onChange={(e) => handleInputChange('dropOff', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.transport.dropOff ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-purple-500'
                }`}
              />
              {errors.transport.dropOff && (
                <p className="text-red-500 text-xs mt-1">{errors.transport.dropOff}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🕐 Pick-up Date & Time
              </label>
              <input
                type="datetime-local"
                value={formData.transport.dateTime}
                onChange={(e) => handleInputChange('dateTime', e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-300 focus:shadow-lg bg-white/90 backdrop-blur-sm ${
                  errors.transport.dateTime ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-purple-500'
                }`}
              />
              {errors.transport.dateTime && (
                <p className="text-red-500 text-xs mt-1">{errors.transport.dateTime}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="relative z-10 mt-6 sm:mt-8 text-center">
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`font-bold py-4 sm:py-5 px-8 sm:px-16 rounded-xl sm:rounded-2xl text-lg sm:text-xl transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 animate-pulse-slow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
            activeTab === 'hotels' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white' 
              : activeTab === 'airlines'
              ? 'bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
          }`}
        >
          <span className="flex items-center justify-center space-x-2 sm:space-x-3">
            <span className="text-sm sm:text-base">
              {isSubmitting ? '⏳' : (activeTab === 'hotels' ? '🏨' : activeTab === 'airlines' ? '✈️' : '🚗')}
            </span>
            <span className="text-sm sm:text-base">
              {isSubmitting ? 'Searching...' : (activeTab === 'hotels' ? 'Find Hotels' : activeTab === 'airlines' ? 'Search Flights' : 'Book Transport')}
            </span>
            {!isSubmitting && <span className="animate-bounce text-sm sm:text-base">→</span>}
          </span>
        </button>
      </div>

      {/* Booking Confirmation Modal */}
      <BookingConfirmation
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        bookingData={{
          type: activeTab,
          data: formData[activeTab]
        }}
      />
    </div>
  )
}
