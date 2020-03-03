import { Parent } from '../../../entities/parent'

export const childrenResolver = {
  async children(parentObj: Parent, { name }, context: any) {
    return await parentObj.children
  }
}
