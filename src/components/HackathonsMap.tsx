import { useCallback, useState } from 'react'
import { ELocation } from '../types/ELocation'
import LocationPin from './LocationPin'
import MapSvg from './MapSvg'
import { useDebouncedResizeObserver } from '../hooks/useDebouceResizeObserver'
import { HackathonsMapContainer } from './HackthonsMap.styled'

type HackathonsMapProps<TLocationData extends Record<string, unknown>> = {
  onLocationChange: (location: ELocation | null) => void
  selectedLocation: ELocation | null
  locationOptions: Partial<Record<ELocation, TLocationData>>
  renderTooltipContent: (
    location: ELocation,
    locationData: TLocationData,
  ) => React.ReactNode
}

const HackathonsMap = <TLocationData extends Record<string, unknown>>({
  onLocationChange,
  selectedLocation,
  locationOptions,
  renderTooltipContent,
}: HackathonsMapProps<TLocationData>) => {
  const [mapSize, setMapSize] = useState({
    width: 0,
    height: 0,
  })

  const observerRef = useDebouncedResizeObserver((entries) => {
    if (
      mapSize.width === entries[0].contentRect.width &&
      mapSize.height === entries[0].contentRect.height
    ) {
      return
    }

    setMapSize({
      width: entries[0].contentRect.width,
      height: entries[0].contentRect.height,
    })
  }, 300)

  const handleLocationClick = useCallback(
    (location: ELocation) => {
      if (location === selectedLocation) {
        onLocationChange(null)
      } else {
        onLocationChange(location)
      }
    },
    [onLocationChange, selectedLocation],
  )

  return (
    <HackathonsMapContainer ref={observerRef}>
      <MapSvg width={mapSize.width} />
      {Object.entries(locationOptions).map(([location, locationData]) => (
        <LocationPin
          key={location}
          location={location as ELocation}
          onClick={handleLocationClick}
          selected={selectedLocation === location}
          containerWidth={mapSize.width}
          containerHeight={mapSize.height}
          renderTooltipContent={renderTooltipContent}
          locationData={locationData}
        />
      ))}
    </HackathonsMapContainer>
  )
}

export default HackathonsMap
