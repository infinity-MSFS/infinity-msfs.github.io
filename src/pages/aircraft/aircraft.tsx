import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react'

type T_Aircraft = {
  id: number
  name: string
  price: string
  rating: number
  reviews: number
  description: string
  features: string[]
  images: string[]
  thumbnail: string
}

const aircraftData: T_Aircraft[] = [
  {
    id: 1,
    name: 'Northrop T-38C Talon',
    price: '$38.99',
    rating: 4.8,
    reviews: 156,
    description: 'The Northrop T-38C Talon is a twin-engine, high-altitude, supersonic jet trainer aircraft.',
    features: ['Realistic flight dynamics', 'Custom sound package', 'Detailed cockpit', 'Multiple liveries'],
    images: [
    
      'https://i.gyazo.com/221b3ba316dc5fa55533b84126436136.png',
      'https://i.gyazo.com/a4228b64e99c48a60768b74a3c870191.png',
      'https://i.gyazo.com/0081cf97f39b9d05ca602dbb3fdda522.png',
      'https://i.gyazo.com/ae128a49920630cac7176318d0e9f0cc.png',
'https://i.gyazo.com/651e3bab6fcd20528bee796d1cd6873c.png',
'https://i.gyazo.com/e45854387a59dfaf3175689ef54613d7.png',
'https://i.gyazo.com/043f0ddd54ed70941abb0f5765f21866.png',
'https://i.gyazo.com/6976c28fd92bb800d9a9d73d60bfcbb2.png',
'https://i.gyazo.com/a5b00903da8d0138c35727753229681e.png'
    ],
    thumbnail:
     'https://i.gyazo.com/547d29151342182bf80397623e52f79e.png'
  }
]

export const Aircraft = (): JSX.Element => {
  const [selectedAircraft, setSelectedAircraft] = useState<T_Aircraft | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const openModal = (aircraft: T_Aircraft): void => {
    setSelectedAircraft(aircraft)
    setCurrentImageIndex(0)
  }

  const closeModal = (): void => {
    setSelectedAircraft(null)
    setCurrentImageIndex(0)
  }

  const nextImage = (): void => {
    if (selectedAircraft != null && selectedAircraft.images.length > 0) {
      setCurrentImageIndex((prev) => (prev === selectedAircraft.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = (): void => {
    if (selectedAircraft != null && selectedAircraft.images.length > 0) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedAircraft.images.length - 1 : prev - 1))
    }
  }

  const handlePurchase = (aircraft: T_Aircraft): void => {
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
            onClick={() => {
              openModal(aircraft)
            }}
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
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
      {selectedAircraft != null && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-slate-200">{selectedAircraft.name}</h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-slate-200 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              {selectedAircraft.images[currentImageIndex] && (
                <img
                  src={selectedAircraft.images[currentImageIndex]}
                  alt={`${selectedAircraft.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-64 md:h-96 object-cover"
                />
              )}

              {selectedAircraft.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {selectedAircraft.images.map((_, index) => (
                      <button
                        type="button"
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
                      type="button"
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
