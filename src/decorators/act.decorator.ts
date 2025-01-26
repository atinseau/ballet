import type { ActType } from "../act-type.type"
import { DANCE_METADATA_KEY } from "../constants"

export const Act = (type: ActType) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log('Act Decorator')
    Reflect.defineMetadata('act', type, target, propertyKey)
  }
}
