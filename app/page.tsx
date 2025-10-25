import BookingWidget from '@/components/BookingWidget'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 shadow-2xl">
                <Image
                  src="/logo.jpeg"
                  alt="Quality Destination Logo"
                  fill
                  className="rounded-full object-cover shadow-xl ring-2 sm:ring-4 ring-blue-300/50 hover:ring-purple-300/50 transition-all duration-300"
                />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quality Destination
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform">
                  Flights
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform">
                  Hotels
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform">
                  Transport
                </a>
                <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Sign In
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
        {/* Clean Background */}
        <div className="absolute inset-0 z-0">
          {/* Single Background Image */}
          <Image
            src="/hotel.jpg"
            alt="Travel background"
            fill
            className="object-cover opacity-20"
          />
          
          {/* Clean Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-slate-800/50 to-gray-900/60"></div>
          
          {/* Subtle Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float backdrop-blur-sm"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-gray-400/20 rounded-full animate-float backdrop-blur-sm" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-slate-400/20 rounded-full animate-float backdrop-blur-sm" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-white/15 rounded-full animate-float backdrop-blur-sm" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 animate-fade-in drop-shadow-2xl">
            Your journey awaits
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto animate-slide-up drop-shadow-lg bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
            Discover premium destinations with <span className="font-semibold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Quality Destination</span>. 
            Experience luxury travel with excellence and reliability.
          </p>
          
          {/* Booking Widget */}
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Travel Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700/50 to-purple-700/50"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Travelers Worldwide</h2>
            <p className="text-xl text-blue-100">Join millions of satisfied customers who choose Quality Destination</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-5xl font-bold mb-2">2M+</div>
              <div className="text-blue-100">Happy Travelers</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Complete Travel Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From flights to accommodations, we provide everything you need for the perfect journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flight Bookings</h3>
              <p className="text-gray-600 mb-4">Find the best flight deals with our advanced search technology and exclusive partnerships with major airlines.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Best price guarantee</li>
                <li>• Flexible booking options</li>
                <li>• Real-time price alerts</li>
              </ul>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hotel Reservations</h3>
              <p className="text-gray-600 mb-4">Discover luxury accommodations worldwide with our curated selection of premium hotels and resorts.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Luxury accommodations</li>
                <li>• Exclusive hotel deals</li>
                <li>• Free cancellation</li>
              </ul>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-600 mb-4">Seamless ground transportation with premium vehicles and professional drivers for your comfort.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Premium vehicles</li>
                <li>• Professional drivers</li>
                <li>• 24/7 availability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Travelers</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who trusted us with their journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Ahmed Al-Rashid</h4>
                  <p className="text-sm text-gray-500">Dubai, UAE</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Quality Destination made my pilgrimage to Mecca seamless and comfortable. Their attention to detail and 24/7 support was exceptional."</p>
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">London, UK</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The luxury hotel recommendations were perfect, and the flight booking process was incredibly smooth. Highly recommended!"</p>
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Mohammed Hassan</h4>
                  <p className="text-sm text-gray-500">Jeddah, Saudi Arabia</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Outstanding service for business travel. The transportation arrangements were punctual and the hotels exceeded expectations."</p>
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Divider */}
      <div className="relative h-20 bg-gradient-to-b from-transparent via-white/50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Why Book With Us Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quality Destination</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We deliver exceptional travel experiences with luxury, reliability, and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group animate-slide-in-left hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Pricing</h3>
              <p className="text-gray-600">
                Exclusive deals and premium pricing for luxury accommodations and first-class experiences.
              </p>
            </div>
            
            <div className="text-center group animate-slide-up hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Concierge</h3>
              <p className="text-gray-600">
                Personal concierge service available around the clock for your luxury travel needs.
              </p>
            </div>
            
            <div className="text-center group animate-slide-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Excellence</h3>
              <p className="text-gray-600">
                Curated destinations worldwide with local expertise and premium service standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-l from-pink-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Exclusive <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Travel Deals</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Limited-time offers for premium destinations and luxury experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">-30% OFF</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">Mecca Pilgrimage</h3>
                  <p className="text-blue-100 text-sm">Complete Hajj packages</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Experience the spiritual journey of a lifetime with our comprehensive Hajj packages including flights, accommodation, and guidance.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$2,999</span>
                  <span className="text-sm text-gray-500 line-through">$4,299</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">-25% OFF</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">Luxury Hotels</h3>
                  <p className="text-emerald-100 text-sm">5-star accommodations</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Indulge in luxury with our premium hotel collection featuring world-class amenities and exceptional service.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$299</span>
                  <span className="text-sm text-gray-500 line-through">$399</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-purple-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">-20% OFF</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">Business Travel</h3>
                  <p className="text-purple-100 text-sm">Corporate packages</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Streamline your business travel with our corporate packages including flights, hotels, and ground transportation.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$1,499</span>
                  <span className="text-sm text-gray-500 line-through">$1,899</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Premium <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Destinations</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Discover sacred and magnificent destinations with Quality Destination
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: 'Jeddah', image: '/jeddah.jpg', description: 'The Bride of the Red Sea' },
              { name: 'Mecca', image: '/mecca.jpg', description: 'The Holiest City' },
              { name: 'Medina', image: '/Medina.jpg', description: 'The City of the Prophet' },
            ].map((destination, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-slide-up hover:scale-105 transition-all duration-500"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-white/90">
                      {destination.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 animate-float shadow-2xl">
                <Image
                  src="/logo.jpeg"
                  alt="Quality Destination Logo"
                  fill
                  className="rounded-full object-cover shadow-xl ring-2 sm:ring-4 ring-blue-400/30"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-pulse-slow"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quality Destination
              </h3>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Your premium partner for exceptional travel experiences. Discover the world with luxury, excellence, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400 mb-6 sm:mb-8">
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-105 transform">Contact Us</a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Quality Destination. All rights reserved. Crafted with excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
