import type { ELocation } from '../types/ELocation'

import { StyledLocationPin } from './LocationPin.styled'
import Tooltip from './Tooltip'

type LocationPinProps<TLocationData extends Record<string, unknown>> = {
  location: ELocation
  onClick?: (location: ELocation) => void
  containerWidth: number
  containerHeight: number
  color?: string
  selected?: boolean
  locationData: TLocationData
  renderTooltipContent: (
    location: ELocation,
    locationData: TLocationData,
  ) => React.ReactNode
}

const LocationPin = <TLocationData extends Record<string, unknown>>({
  location,
  onClick,
  containerWidth,
  containerHeight,
  selected = false,
  color = '#D14D41',
  renderTooltipContent,
  locationData,
}: LocationPinProps<TLocationData>) => {
  if (!containerWidth || !containerHeight) {
    return null
  }

  return (
    <>
      <StyledLocationPin
        width={0.05 * containerWidth}
        height={0.05 * containerHeight}
        viewBox="0 0 60 72"
        fill="none"
        $location={location}
        $containerWidth={containerWidth}
        $containerHeight={containerHeight}
        $selected={selected}
        onClick={() => onClick?.(location)}
      >
        <path
          d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 15 60 30 72C45 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0ZM30 42C23.3727 42 18 36.6273 18 30C18 23.3727 23.3727 18 30 18C36.6273 18 42 23.3727 42 30C42 36.6273 36.6273 42 30 42Z"
          fill={color}
        />
      </StyledLocationPin>
      <Tooltip
        location={location}
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        visible={selected}
        renderTooltipContent={renderTooltipContent}
        locationData={locationData}
      />
    </>
  )
}

export default LocationPin
