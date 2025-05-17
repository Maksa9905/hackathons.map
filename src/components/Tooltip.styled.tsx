import styled from 'styled-components'
import type { ELocation } from '../types/ELocation'
import { convertCoordinates } from '../utils/coordinatesConverter'

export const TooltipContainer = styled.div<{
  $location: ELocation
  $containerWidth: number
  $containerHeight: number
  $visible: boolean
  $top: boolean
  $left: boolean
}>`
  position: absolute;
  top: ${({ $location, $containerHeight }) =>
    (convertCoordinates($location).top / 100) * $containerHeight}px;
  left: ${({ $location, $containerWidth }) =>
    (convertCoordinates($location).left / 100) * $containerWidth}px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.1s ease-in-out;
  z-index: 2;
  min-width: 200px;
  transform-origin: ${({ $left, $top }) =>
    `${$left ? 'left' : 'right'} ${$top ? 'top' : 'bottom'}`};

  transform: translate(
    ${({ $left }) => ($left ? '10%' : '-120%')},
    ${({ $top }) => ($top ? '10%' : '-120%')}
  );
`
