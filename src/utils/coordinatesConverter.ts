import { ELocation } from '../types/ELocation'

export const convertCoordinates = (location: ELocation) => {
  switch (location) {
    case ELocation.SAINT_PETERSBURG:
      return { top: 41, left: 14.5 }
    case ELocation.SMOLENSK:
      return { top: 55, left: 8 }
    case ELocation.MOSCOW:
      return { top: 54, left: 13 }
    case ELocation.SARATOV:
      return { top: 72, left: 15 }
    case ELocation.KAZAN:
      return { top: 65, left: 21 }
    case ELocation.EKATERINBURG:
      return { top: 69, left: 31 }
    case ELocation.PERM:
      return { top: 60, left: 27 }
    case ELocation.OMSK:
      return { top: 77, left: 37 }
    case ELocation.NOVOSIBIRSK:
      return { top: 82, left: 44 }
    case ELocation.IRKUTSK:
      return { top: 83, left: 58 }
    case ELocation.VLADIVOSTOK:
      return { top: 83, left: 91 }
    default:
      return { top: 0, left: 0 }
  }
}
