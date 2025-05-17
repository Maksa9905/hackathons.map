import { useState } from 'react'
import { ELocation } from './types/ELocation'
import HackathonsMap from './components/HackathonsMap'

function App() {
  const [selectedLocation, setSelectedLocation] = useState<ELocation | null>(
    null,
  )

  return (
    <HackathonsMap
      onLocationChange={setSelectedLocation}
      selectedLocation={selectedLocation}
      renderTooltipContent={(location, locationData) => (
        <div>
          <h1>{location}</h1>
          <h2>{locationData.name}</h2>
        </div>
      )}
      locationOptions={{
        [ELocation.VLADIVOSTOK]: {
          name: 'Vladivostok',
          coordinates: {
            latitude: 43.1167,
            longitude: 132.15,
          },
        },
        [ELocation.MOSCOW]: {
          name: 'Moscow',
          coordinates: {
            latitude: 55.7558,
            longitude: 37.6173,
          },
        },
        [ELocation.IRKUTSK]: {
          name: 'Irkutsk',
          coordinates: {
            latitude: 52.2833,
            longitude: 104.2833,
          },
        },
        [ELocation.OMSK]: {
          name: 'Omsk',
          coordinates: {
            latitude: 54.9833,
            longitude: 73.3667,
          },
        },
      }}
    />
  )
}

export default App
