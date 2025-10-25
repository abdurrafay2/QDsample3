'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [activeTab, setActiveTab] = useState('hotels')
  const [currentImage, setCurrentImage] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const backgroundImages = ['/mecca.jpg', '/jeddah.jpg', '/Medina.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const hotels = [
    {
      id: 1,
      name: "Luxury Hotel Mecca",
      location: "Mecca, Saudi Arabia",
      price: 299,
      rating: 4.8,
      image: "/hotel.jpg",
      type: "Luxury",
      distance: "0.5 km from Grand Mosque",
      amenities: ["Free WiFi", "Restaurant", "Swimming Pool", "Fitness Center"]
    },
    {
      id: 2,
      name: "Red Sea Resort",
      location: "Jeddah, Saudi Arabia",
      price: 199,
      rating: 4.6,
      image: "/jeddah.jpg",
      type: "Resort",
      distance: "2.1 km from Red Sea",
      amenities: ["Free WiFi", "Restaurant", "Spa", "Fitness Center"]
    },
    {
      id: 3,
      name: "Medina Palace Hotel",
      location: "Medina, Saudi Arabia",
      price: 249,
      rating: 4.7,
      image: "/Medina.jpg",
      type: "Palace",
      distance: "0.8 km from Prophet's Mosque",
      amenities: ["Free WiFi", "Restaurant", "Swimming Pool", "Fitness Center"]
    },
    {
      id: 4,
      name: "Mecca Grand Hotel",
      location: "Mecca, Saudi Arabia",
      price: 189,
      rating: 4.5,
      image: "/mecca.jpg",
      type: "Business",
      distance: "1.2 km from Grand Mosque",
      amenities: ["Free WiFi", "Restaurant", "Fitness Center", "24/7 Service"]
    },
    {
      id: 5,
      name: "Jeddah City Center",
      location: "Jeddah, Saudi Arabia",
      price: 159,
      rating: 4.4,
      image: "/jeddah.jpg",
      type: "City",
      distance: "3.5 km from city center",
      amenities: ["Free WiFi", "Restaurant", "Swimming Pool", "Business Center"]
    },
    {
      id: 6,
      name: "Medina Heritage Hotel",
      location: "Medina, Saudi Arabia",
      price: 179,
      rating: 4.3,
      image: "/Medina.jpg",
      type: "Heritage",
      distance: "1.5 km from Prophet's Mosque",
      amenities: ["Free WiFi", "Restaurant", "Fitness Center", "Cultural Tours"]
    }
  ]

  const flights = [
    {
      id: 1,
      airline: "Saudi Airlines",
      from: "Jeddah",
      to: "Mecca",
      depart: "08:00",
      arrive: "08:45",
      price: 89,
      duration: "45m",
      image: "/airline.jpg",
      features: ["Direct Flight", "Free Meals", "Entertainment"]
    },
    {
      id: 2,
      airline: "Flynas",
      from: "Riyadh",
      to: "Jeddah",
      depart: "14:30",
      arrive: "16:15",
      price: 149,
      duration: "1h 45m",
      image: "/airline.jpg",
      features: ["Direct Flight", "Free WiFi", "Priority Boarding"]
    },
    {
      id: 3,
      airline: "Saudia",
      from: "Mecca",
      to: "Medina",
      depart: "10:15",
      arrive: "11:00",
      price: 79,
      duration: "45m",
      image: "/airline.jpg",
      features: ["Direct Flight", "Free Snacks", "Entertainment"]
    }
  ]

  const transport = [
    {
      id: 1,
      type: "Premium Car",
      from: "Jeddah Airport",
      to: "Mecca City Center",
      price: 89,
      duration: "1h 30m",
      image: "/transport.jpg",
      features: ["Professional Driver", "Air Conditioning", "Free WiFi"]
    },
    {
      id: 2,
      type: "Luxury Van",
      from: "Mecca",
      to: "Medina",
      price: 199,
      duration: "4h 15m",
      image: "/transport.jpg",
      features: ["Professional Driver", "Comfortable Seats", "Free Water"]
    },
    {
      id: 3,
      type: "Executive Bus",
      from: "Jeddah",
      to: "Mecca",
      price: 45,
      duration: "2h 30m",
      image: "/transport.jpg",
      features: ["Professional Driver", "Comfortable Seats", "Free Water", "WiFi"]
    }
  ]

  const getCurrentData = () => {
    switch(activeTab) {
      case 'hotels': return hotels
      case 'flights': return flights
      case 'transport': return transport
      default: return []
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <Image
            src={backgroundImages[currentImage]}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-slate-500/10 to-slate-500/15"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-20 bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <div className="relative w-12 h-12">
                <Image
                  src="/logobg.png"
                  alt="Quality Destination"
                  width={48}
                  height={48}
                  className="rounded-full object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-slate-500 opacity-20 animate-spin-slow"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                Quality Destination
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Hotels', 'Flights', 'Transport'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-slate-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-slate-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="text-blue-500 text-2xl mr-3 animate-pulse">✨</span>
              <span className="text-blue-600 font-semibold text-lg">Premium Travel Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Discover Your
              <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent block animate-gradient">
                Perfect Journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience luxury travel with our premium booking platform. 
              Book hotels, flights, and transport with confidence and style.
            </p>
          </div>

          {/* Enhanced Search Interface */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="flex border-b mb-8">
              {[
                { id: 'hotels', label: 'Hotels', icon: '🏨', color: 'from-blue-500 to-blue-600' },
                { id: 'flights', label: 'Flights', icon: '✈️', color: 'from-sky-500 to-blue-500' },
                { id: 'transport', label: 'Transport', icon: '🚗', color: 'from-purple-500 to-pink-500' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-medium transition-all duration-300 relative hover:scale-105 ${
                    activeTab === tab.id 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-lg`}></div>
                  )}
                  <div className="relative flex items-center">
                    <span className="mr-2 text-xl">{tab.icon}</span>
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Destination', placeholder: 'Where are you going?', icon: '📍' },
                { label: 'Check-in', type: 'date', icon: '📅' },
                { label: 'Check-out', type: 'date', icon: '📅' },
                { label: 'Guests', type: 'select', icon: '👥', options: ['2 Guests', '1 Guest', '3 Guests', '4+ Guests'] }
              ].map((input, index) => (
                <div key={input.label} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {input.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      {input.icon}
                    </span>
                    {input.type === 'select' ? (
                      <select className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 hover:scale-105">
                        {input.options?.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={input.type || 'text'}
                        placeholder={input.placeholder}
                        className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 hover:scale-105"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-slate-600 text-white py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold mt-8 flex items-center justify-center group">
              <span className="mr-2 group-hover:rotate-12 transition-transform">🔍</span>
              Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient">Quality Destination</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience premium travel with our exclusive features and world-class service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛡️',
                title: "Secure Booking",
                description: "Your data and payments are protected with bank-level security",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: '🏆',
                title: "Best Price Guarantee",
                description: "We guarantee the best prices or we'll match any lower price",
                color: "from-slate-500 to-slate-600"
              },
              {
                icon: '🌍',
                title: "24/7 Support",
                description: "Round-the-clock customer support in multiple languages",
                color: "from-blue-600 to-slate-600"
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Available {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-gray-600">Discover the best options for your journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1">
                <span className="mr-2">🔍</span>
                Filter
              </button>
              <button className="flex items-center px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1">
                <span className="mr-2">📊</span>
                Sort
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentData().map((item: any, index: number) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name || item.airline || item.type}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button 
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                          favorites.includes(item.id) 
                            ? 'bg-red-500 text-white shadow-lg' 
                            : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                        }`}
                      >
                        {favorites.includes(item.id) ? '❤️' : '🤍'}
                      </button>
                      <button className="p-3 bg-white/80 text-gray-600 rounded-full backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110">
                        📤
                      </button>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                        <span className="text-sm text-gray-500 ml-1">
                          {activeTab === 'hotels' ? '/night' : 
                           activeTab === 'flights' ? '/person' : '/trip'}
                        </span>
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.name || item.airline || item.type}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.location || `${item.from} → ${item.to}`}
                    </p>

                    {/* Hotel Details */}
                    {activeTab === 'hotels' && (
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center">
                            <span className="mr-1 text-blue-500">📍</span>
                            {item.distance}
                          </span>
                          <span className="bg-gradient-to-r from-blue-500 to-slate-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {item.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.amenities?.slice(0, 3).map((amenity: string, idx: number) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Flight/Transport Details */}
                    {(activeTab === 'flights' || activeTab === 'transport') && (
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <span className="mr-1">🕐</span>
                          {item.depart} - {item.arrive || item.duration}
                        </span>
                        <span className="font-semibold">{item.duration}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-1">👁️</span>
                        <span>View Details</span>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-slate-600 text-white py-2 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-blue-600 to-slate-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-yellow-300">Millions</span> Worldwide
            </h2>
            <p className="text-xl text-blue-100">Join our community of satisfied travelers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2M+", label: "Happy Travelers", icon: "👥" },
              { number: "50K+", label: "Hotels Worldwide", icon: "🏨" },
              { number: "99.9%", label: "Customer Satisfaction", icon: "🏆" },
              { number: "24/7", label: "Customer Support", icon: "🛡️" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logobg.png"
                  alt="Quality Destination"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                Quality Destination
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for premium travel experiences worldwide.
            </p>
            <p className="text-gray-400">
              © 2024 Quality Destination. Crafted with ❤️ for travelers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}