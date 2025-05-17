import styled, { css } from 'styled-components'
import type { ELocation } from '../types/ELocation'
import { convertCoordinates } from '../utils/coordinatesConverter'

export const StyledLocationPin = styled.svg<{
  $location: ELocation
  $containerWidth: number
  $containerHeight: number
  $selected: boolean
}>`
  cursor: pointer;
  position: absolute;
  transform-origin: center bottom;
  transform: translate(-50%, 0);

  top: ${({ $location, $containerHeight }) =>
    (convertCoordinates($location).top / 100) * $containerHeight}px;
  left: ${({ $location, $containerWidth }) =>
    (convertCoordinates($location).left / 100) * $containerWidth}px;

  ${({ $selected }) =>
    $selected &&
    css`
      transform: translate(-50%, -10px);
      scale: 1.2;
    `}

  transition: all 0.1s ease-in-out;
`
