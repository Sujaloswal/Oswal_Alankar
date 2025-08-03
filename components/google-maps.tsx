"use client"

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface GoogleMapsProps {
  apiKey: string
  latitude: number
  longitude: number
  zoom?: number
  title?: string
}

export default function GoogleMaps({ 
  apiKey, 
  latitude, 
  longitude, 
  zoom = 15, 
  title = "Jewellery Shop" 
}: GoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: apiKey,
        version: 'weekly',
        libraries: ['places']
      })

      try {
        const google = await loader.load()
        
        if (mapRef.current) {
          const position = { lat: latitude, lng: longitude }
          
          const map = new google.maps.Map(mapRef.current, {
            center: position,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
              {
                featureType: "poi.business",
                stylers: [{ visibility: "simplified" }]
              },
              {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
              }
            ]
          })

          // Add marker for the shop location
          const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#B45309"/>
                  <circle cx="16" cy="16" r="8" fill="#FEF3C7"/>
                  <circle cx="16" cy="16" r="4" fill="#B45309"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(32, 32),
              anchor: new google.maps.Point(16, 32)
            }
          })

          // Add info window with directions button
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 12px; max-width: 280px; font-family: Arial, sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #B45309; font-weight: bold; font-size: 16px;">${title}</h3>
                <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px; line-height: 1.4;">
                  Shop No 43 C Ward, Gujari Rd<br>
                  near by H F Jewellers, Bazar<br>
                  Kolhapur, Maharashtra 416002<br>
                  India
                </p>
                <p style="margin: 0 0 12px 0; color: #6B7280; font-size: 12px;">
                  Phone: +91 8149829797 / +91 9822299998
                </p>
                <button 
                  onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving', '_blank')"
                  style="
                    background: #B45309; 
                    color: white; 
                    border: none; 
                    padding: 8px 16px; 
                    border-radius: 4px; 
                    cursor: pointer; 
                    font-size: 14px; 
                    font-weight: 500;
                    width: 100%;
                  "
                  onmouseover="this.style.background='#92400E'"
                  onmouseout="this.style.background='#B45309'"
                >
                  🗺️ Get Directions
                </button>
              </div>
            `
          })

          // Show info window on marker click
          marker.addListener('click', () => {
            infoWindow.open(map, marker)
          })

          // Add click listener to map to close info window
          map.addListener('click', () => {
            infoWindow.close()
          })

          // Show info window by default
          infoWindow.open(map, marker)
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    if (apiKey && apiKey !== 'YOUR_API_KEY_HERE') {
      initMap()
    }
  }, [apiKey, latitude, longitude, zoom, title])

  return (
    <div className="w-full h-full min-h-[300px] rounded-lg overflow-hidden shadow-md border border-stone-300">
      {apiKey === 'YOUR_API_KEY_HERE' ? (
        <div className="flex items-center justify-center h-full bg-stone-100 text-stone-500">
          <div className="text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-sm">Please add your Google Maps API key</p>
            <p className="text-xs text-stone-400 mt-1">Update .env.local file</p>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-800 mb-2">For development/testing:</p>
              <p className="text-xs text-amber-700">
                Create a .env.local file in your project root with:<br/>
                <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here</code>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div ref={mapRef} className="w-full h-full" />
      )}
    </div>
  )
} 