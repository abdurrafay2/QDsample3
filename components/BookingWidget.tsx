'use client'

import { useState } from 'react'
import Image from 'next/image'

type TabType = 'hotels' | 'airlines' | 'transport'

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<TabType>('hotels')

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
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 max-w-5xl mx-auto animate-slide-up hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
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
      <div className="relative z-10 flex border-b border-gray-200 mb-8 bg-white/50 backdrop-blur-sm rounded-t-2xl p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-4 text-sm font-semibold transition-all duration-500 transform hover:scale-105 rounded-xl ${
              activeTab === tab.id
                ? `text-white bg-gradient-to-r ${tab.gradient} shadow-lg border-2 border-white/30`
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/70'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative z-10 space-y-6">
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in-left">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🏨 Destination
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Check-in
              </label>
              <input
                type="date"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Check-out
              </label>
              <input
                type="date"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                👥 Guests
              </label>
              <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:shadow-lg bg-white/90 backdrop-blur-sm">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === 'airlines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-slide-in-right">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                ✈️ From
              </label>
              <input
                type="text"
                placeholder="Departure city"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                ✈️ To
              </label>
              <input
                type="text"
                placeholder="Destination city"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Depart
              </label>
              <input
                type="date"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                📅 Return
              </label>
              <input
                type="date"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                👥 Passengers
              </label>
              <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 hover:border-sky-300 focus:shadow-lg bg-white/90 backdrop-blur-sm">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === 'transport' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🚗 Pick-up Location
              </label>
              <input
                type="text"
                placeholder="Where to pick you up?"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🚗 Drop-off Location
              </label>
              <input
                type="text"
                placeholder="Where to drop you off?"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                🕐 Pick-up Date & Time
              </label>
              <input
                type="datetime-local"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 focus:shadow-lg bg-white/90 backdrop-blur-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="relative z-10 mt-8 text-center">
        <button className={`font-bold py-5 px-16 rounded-2xl text-xl transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 animate-pulse-slow ${
          activeTab === 'hotels' 
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white' 
            : activeTab === 'airlines'
            ? 'bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
        }`}>
          <span className="flex items-center space-x-3">
            <span>
              {activeTab === 'hotels' ? '🏨' : activeTab === 'airlines' ? '✈️' : '🚗'}
            </span>
            <span>
              {activeTab === 'hotels' ? 'Find Hotels' : activeTab === 'airlines' ? 'Search Flights' : 'Book Transport'}
            </span>
            <span className="animate-bounce">→</span>
          </span>
        </button>
      </div>
    </div>
  )
}
