import { childrenResolver } from './child'

export const Query = {
  Parent: {
    ...childrenResolver
  }
}

export const Mutation = {}
