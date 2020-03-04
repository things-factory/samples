import { getRepository, In } from 'typeorm'
import { Parent } from '../../../entities'
export const parentResolver = {
  async parent(_: any, { name }, context: any) {
    const parentRepo = getRepository(Parent)
    return await parentRepo.findOne({
      name
    })
  },

  async parents(_: any, { names }, context: any) {
    const parentRepo = getRepository(Parent)

    const findOption = {}
    if (names) {
      findOption['where'] = {
        name: In(names)
      }
    }

    const parents = await parentRepo.find({
      ...findOption
    })

    return parents
  }
}
