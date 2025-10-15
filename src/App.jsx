import React, { useState } from 'react'
import { 
  Car, 
  Shield, 
  Clock, 
  DollarSign, 
  MapPin, 
  Calendar,
  Users,
  Star,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail
} from 'lucide-react'
import BookingModal from './components/BookingModal'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)

  const cars = [
    {
      id: 1,
      name: 'Tesla Model 3',
      category: 'Electric',
      price: 89,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop',
      seats: 5,
      transmission: 'Auto',
      rating: 4.9
    },
    {
      id: 2,
      name: 'BMW X5',
      category: 'SUV',
      price: 129,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop',
      seats: 7,
      transmission: 'Auto',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Mercedes C-Class',
      category: 'Luxury',
      price: 99,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop',
      seats: 5,
      transmission: 'Auto',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Toyota Camry',
      category: 'Sedan',
      price: 59,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      seats: 5,
      transmission: 'Auto',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Audi A4',
      category: 'Luxury',
      price: 95,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      seats: 5,
      transmission: 'Auto',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Range Rover Sport',
      category: 'SUV',
      price: 149,
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop',
      seats: 7,
      transmission: 'Auto',
      rating: 4.9
    }
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fully Insured',
      description: 'All vehicles come with comprehensive insurance coverage'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service for your convenience'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden fees'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Multiple Locations',
      description: 'Pick up and drop off at convenient locations'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent service! The car was clean and the process was seamless.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best car rental experience. Highly recommend DriveNow!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      comment: 'Great prices and amazing customer support. Will use again!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    }
  ]

  // Filtrer les voitures selon la recherche
  const filteredCars = searchQuery.trim() === '' 
    ? cars 
    : cars.filter(car => 
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase())
      )

  // Gérer la sélection d'une voiture depuis la recherche
  const handleSearchSelect = (car) => {
    setSearchQuery(car.name)
    setShowSearchResults(false)
    // Scroll vers la section des voitures
    document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" onClick={() => setShowSearchResults(false)}>
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">DriveNow</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition">Home</a>
              <a href="#cars" className="text-gray-700 hover:text-primary-600 transition">Cars</a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition">Reviews</a>
              <button className="gradient-primary text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-primary-600">Home</a>
              <a href="#cars" className="block text-gray-700 hover:text-primary-600">Cars</a>
              <a href="#features" className="block text-gray-700 hover:text-primary-600">Features</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-primary-600">Reviews</a>
              <button className="w-full gradient-primary text-white px-6 py-2 rounded-lg">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Drive Your Dreams
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Experience the pinnacle of automotive excellence. Discover our curated collection of premium vehicles, meticulously maintained for your ultimate driving pleasure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition flex items-center justify-center">
                  Explore Collection <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
                  Discover More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&auto=format&fit=crop" 
                alt="Luxury car" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Quick Booking Form */}
          <div className="mt-12 bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Reserve Your Ride</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Car className="inline w-4 h-4 mr-1" />
                  Search Vehicle
                </label>
                <input 
                  type="text" 
                  placeholder="Tesla, BMW, Mercedes..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setShowSearchResults(true)
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                {showSearchResults && searchQuery && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {filteredCars.length > 0 ? (
                      filteredCars.map((car) => (
                        <button
                          key={car.id}
                          onClick={() => handleSearchSelect(car)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition flex items-center gap-3 border-b border-gray-100 last:border-0"
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{car.name}</p>
                            <p className="text-xs text-gray-500">{car.category} • ${car.price}/day</p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-500 text-sm">
                        No vehicles found
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Pick-up Date
                </label>
                <input 
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Return Date
                </label>
                <input 
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                  Search Cars
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover why thousands of customers trust DriveNow for their car rental needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 text-gray-900 rounded-xl mb-5 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exceptional Fleet</h2>
            <p className="text-xl text-gray-600">Handpicked vehicles for discerning drivers</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm cursor-pointer">
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-sm group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-semibold">{car.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{car.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{car.rating}</span>
                      <span className="mx-1">·</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Car className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Starting at</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                        <span className="text-gray-500 ml-1">/day</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedCar(car);
                        setIsBookingModalOpen(true);
                      }}
                      className="bg-gray-900 text-white px-5 py-2.5 rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied drivers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Begin Your Journey</h2>
          <p className="text-xl mb-8 text-gray-100">Reserve your ideal vehicle and experience automotive excellence</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-xl transition">
            Reserve Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-primary-400" />
                <span className="ml-2 text-2xl font-bold">DriveNow</span>
              </div>
              <p className="text-gray-400">Elevating your driving experience since 2024.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Fleet</a></li>
                <li><a href="#" className="hover:text-white transition">Locations</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@drivenow.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DriveNow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {selectedCar && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false);
            setSelectedCar(null);
          }}
          car={selectedCar}
        />
      )}
    </div>
  )
}

export default App
