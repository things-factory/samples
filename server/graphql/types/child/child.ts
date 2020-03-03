import gql from 'graphql-tag'

export const Child = gql`
  type Child {
    id: String
    name: String
    description: String
  }
`
