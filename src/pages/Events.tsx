import React from 'react'

const events = [
  {
    name: 'Crypto Kitchen Conference',
    logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'September 15-17, 2023',
    location: 'New York, NY',
    investment: 'Sponsor',
  },
  {
    name: 'Blockchain Bistro Summit',
    logo: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'October 5-7, 2023',
    location: 'London, UK',
    investment: 'Speaker',
  },
  {
    name: 'Crypto Culinary Expo',
    logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'November 20-22, 2023',
    location: 'Singapore',
    investment: 'Attendee',
  },
]

const Events: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Crypto Conferences</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={event.logo} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <p className="text-teal-600 font-semibold">KitchenAds Investment: {event.investment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events