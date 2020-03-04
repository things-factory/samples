import gql from 'graphql-tag'

export const Parent = gql`
  type Parent {
    id: String
    name: String
    children(name: String): [Child]
  }
`
