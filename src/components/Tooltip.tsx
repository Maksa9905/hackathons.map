import { ELocation } from '../types/ELocation'
import { convertCoordinates } from '../utils/coordinatesConverter'
import { TooltipContainer } from './Tooltip.styled'

type TooltipProps<TLocationData extends Record<string, unknown>> = {
  location: ELocation
  containerWidth: number
  containerHeight: number
  visible: boolean
  locationData: TLocationData
  renderTooltipContent: (
    location: ELocation,
    locationData: TLocationData,
  ) => React.ReactNode
}

const Tooltip = <TLocationData extends Record<string, unknown>>({
  location,
  locationData,
  containerWidth,
  containerHeight,
  visible,
  renderTooltipContent,
}: TooltipProps<TLocationData>) => {
  const { top, left } = convertCoordinates(location)

  return (
    <TooltipContainer
      $visible={visible}
      $location={location}
      $containerWidth={containerWidth}
      $containerHeight={containerHeight}
      $top={top < 70}
      $left={left < 70}
    >
      {renderTooltipContent(location, locationData)}
    </TooltipContainer>
  )
}

export default Tooltip
