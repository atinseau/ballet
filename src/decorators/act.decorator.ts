import { ACT_METADATA_KEY } from "../constants"
import type { ActType } from "../types/act-type.type"

export const Act = (type: ActType) => {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata(ACT_METADATA_KEY, type, target, propertyKey)
  }
}
