import { ICoords } from './newRoute'

export function calculateRouteDistance (origin:ICoords, stops:ICoords[]) {
  let firstDist = calculateDistance(origin, stops[0])

  if (stops.length > 1) {
    for (let x = 0; x < stops.length; x++) {
      if (stops[x + 1])
        firstDist += calculateDistance(stops[x], stops[x + 1])
    }
  }
  const distance = firstDist.toFixed(0)
  const travelTime = ((firstDist / 100) * 60).toFixed(0) // 100km/h
  return { distance, travelTime }
}

export function calculateDistance (origin:ICoords, dest:ICoords, unit = 'K') {
  const lat1 = origin.lat
  const lon1 = origin.lng

  const lat2 = dest.lat
  const lon2 = dest.lng

  if ((lat1 + lon1 === 0) || lat2 + lon2 === 0)
    return 0

  const radlat1 = Math.PI * lat1 / 180
  const radlat2 = Math.PI * lat2 / 180
  const theta = lon1 - lon2
  const radtheta = Math.PI * theta / 180
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  if (unit === 'K') dist = dist * 1.609344
  if (unit === 'N') dist = dist * 0.8684
  return dist
}
