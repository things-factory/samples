import { Child } from './child'

export const Mutation = ``

export const Query = /* GraphQL */ `
  children(name: String): [Child]
`

export const Types = [Child]
