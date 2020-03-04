import { Parent } from './parent'

export const Mutation = ``

export const Query = /* GraphQL */ `
  parent(name: String): Parent
  parents(names: [String]): [Parent]
`

export const Types = [Parent]
