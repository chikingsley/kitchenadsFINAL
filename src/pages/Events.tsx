import React, { useEffect, useState } from 'react'
import { getUnsplashImage } from '../lib/unsplash'
import { Helmet } from 'react-helmet-async'

interface Event {
  name: string
  imageQuery: string
  imageUrl?: string
  date: string
  location: string
  investment: string
}

const eventData: Event[] = [
  {
    name: 'Affiliate World Asia',
    imageQuery: 'bangkok night',  // This gets a nice Bangkok skyline
    date: 'December 4-5, 2024',
    location: 'Bangkok, Thailand',
    investment: 'Attendee',
  },
  {
    name: 'Affiliate Summit Vegas',
    imageQuery: 'las vegas',  // Changed to get a more iconic Vegas view
    date: 'February 3-5, 2025',
    location: 'Caesars Forum, Las Vegas, NV',
    investment: 'Attendee',
  },
]

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(eventData)
  const [isLoading, setIsLoading] = useState(false)

  const loadImages = async () => {
    setIsLoading(true)
    try {
      const updatedEvents = await Promise.all(
        eventData.map(async (event) => {
          const imageUrl = await getUnsplashImage(event.imageQuery)
          return {
            ...event,
            imageUrl: imageUrl || '/fallback-image.jpg',
          }
        })
      )
      setEvents(updatedEvents)
    } catch (error) {
      console.error('Error loading images:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <>
      <Helmet>
        <title>Industry Events | KitchenAds</title>
        <meta name="description" content="Join KitchenAds at major crypto and affiliate marketing events worldwide. Meet our team at conferences in Las Vegas, Bangkok, and more." />
      </Helmet>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">Upcoming Conferences</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  {event.imageUrl && (
                    <img 
                      src={event.imageUrl} 
                      alt={event.name} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.location}</p>
                  <p className="text-teal-600 font-semibold">
                    KitchenAds Investment: {event.investment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
