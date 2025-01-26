import { DANCE_METADATA_KEY } from "../constants"
import type { Graph } from "../classes/Graph"

type DanceOptions<T> = {
  name: string
  graph: Graph<T>
}

export const Dance = <T>(options: DanceOptions<T>) => {
  return (target: any) => {
    Reflect.defineMetadata(DANCE_METADATA_KEY, options, target)
  }
}