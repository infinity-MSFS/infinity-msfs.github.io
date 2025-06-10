import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react'

const aircraftData = [
  {
    id: 1,
    name: 'Northrop T-38C Talon',
    price: '$38.99',
    rating: 4.8,
    reviews: 156,
    description: 'The Northrop T-38C Talon is a twin-engine, high-altitude, supersonic jet trainer aircraft.',
    features: ['Realistic flight dynamics', 'Custom sound package', 'Detailed cockpit', 'Multiple liveries'],
    images: [
      'https://cdn.discordapp.com/attachments/890479608078671873/1382133425309352027/3813.PNG?ex=684a0b8f&is=6848ba0f&hm=fe2b920a170ed7e21409d02a64d9cfb14b455cbd77066d6f96294bcabd8cfcc5&',
      'https://cdn.discordapp.com/attachments/890479608078671873/1382133426949197925/3817.PNG?ex=684a0b8f&is=6848ba0f&hm=3ffa48b28e8a68eb122d711ef9b5ec3c1fc1874995e659277ed74d327210f0ee&',
      'https://cdn.discordapp.com/attachments/890479608078671873/1382133429600256120/3814.PNG?ex=684a0b90&is=6848ba10&hm=11e438b73d1c2918313c5dc02a4a7888f9729821f59333e495896d62e5cb851d&',
      'https://cdn.discordapp.com/attachments/890479608078671873/1382133431076388895/3812.PNG?ex=684a0b90&is=6848ba10&hm=fa6240a24e9baf6d15afe8ad416536e337033febce5f0cfcec0b14d6f9c9bd8c&',
      'https://cdn.discordapp.com/attachments/890479608078671873/1382133432469028895/3811.PNG?ex=684a0b91&is=6848ba11&hm=b81ae5a29d6e876ca970875d8d0e6e27df31145f464664d6c80f34d932119f92&'
    ],
    thumbnail:
      'https://media.discordapp.net/attachments/890479608078671873/1382133435589722292/384.PNG?ex=684a0b91&is=6848ba11&hm=2e269c7362489489ae65f3415bed8a0c6e1206a14dcec13c87de8718a94ec3bb&=&format=webp&quality=lossless&width=1515&height=852'
  }
]

export const Aircraft = (): JSX.Element => {
  const [selectedAircraft, setSelectedAircraft] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (aircraft) => {
    setSelectedAircraft(aircraft)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedAircraft(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedAircraft) {
      setCurrentImageIndex((prev) => (prev === selectedAircraft.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedAircraft) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedAircraft.images.length - 1 : prev - 1))
    }
  }

  const handlePurchase = (aircraft) => {
    // Replace with your third-party payment integration
    console.log(`Purchasing ${aircraft.name} for ${aircraft.price}`)
    // Example: window.open(`https://your-payment-provider.com/checkout?item=${aircraft.id}`, '_blank');
    alert(`Redirecting to payment for ${aircraft.name} - ${aircraft.price}`)
  }

  return (
    <div className="pt-8 flex flex-col items-center justify-center min-h-screen bg-transparent">
      <div style={{ textShadow: 'white 1px 0 70px' }} className="text-4xl text-center font-bold my-8">
        Our Aircraft Collection
      </div>

      <div className="flex pt-6 flex-row flex-wrap gap-8 items-center justify-center max-w-7xl px-4">
        {aircraftData.map((aircraft) => (
          <div
            key={aircraft.id}
            className="bg-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden max-w-sm"
            onClick={() => openModal(aircraft)}
          >
            <div className="relative">
              <img src={aircraft.thumbnail} alt={aircraft.name} className="w-full h-48 object-cover" />
              <div className="absolute top-2 right-2 bg-black bg-opacity-90 rounded-full px-2 py-1 text-sm font-semibold text-slate-200">
                {aircraft.price}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-200 mb-2">{aircraft.name}</h3>

              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(aircraft.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-slate-200">
                  {aircraft.rating} ({aircraft.reviews} reviews)
                </span>
              </div>

              <p className="text-slate-200 text-sm mb-4 line-clamp-2">{aircraft.description}</p>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.stopPropagation()
                  openModal(aircraft)
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedAircraft && (
        <div className="fixed inset-0 bg-black bg-opacity-25  flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-slate-200">{selectedAircraft.name}</h2>
              <button onClick={closeModal} className="text-slate-200 hover:text-gray-700 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <img
                src={selectedAircraft.images[currentImageIndex]}
                alt={`${selectedAircraft.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-96 object-cover"
              />

              {selectedAircraft.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {selectedAircraft.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedAircraft.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-slate-200">
                      {selectedAircraft.rating} ({selectedAircraft.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-slate-400">Description</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed">{selectedAircraft.description}</p>

                  <h3 className="text-lg font-semibold mb-3 text-slate-400">Key Features</h3>
                  <ul className="text-slate-200 space-y-2">
                    {selectedAircraft.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Section */}
                <div className="md:w-80">
                  <div className="bg-gray-950 rounded-lg p-6 sticky top-4">
                    <div className="text-3xl font-bold text-slate-400 mb-4">{selectedAircraft.price}</div>

                    <button
                      onClick={() => handlePurchase(selectedAircraft)}
                      className="w-full bg-green-400 hover:bg-green-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mb-4"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Buy Now
                    </button>

                    <div className="text-sm text-slate-200 text-center">Secure payment via third-party processor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
