import { DANCE_METADATA_KEY } from "../constants"
import type { Graph } from "../Graph"

type DanceOptions<T> = {
  name: string
  graph: Graph<T>
}

export const Dance = <T>(options: DanceOptions<T>) => {
  return (target: any) => {
    console.log('ok')
  }
}