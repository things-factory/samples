import * as Child from './child'
import * as Parent from './parent'

export const queries = [Parent.Query, Child.Query]

export const mutations = []

export const subscriptions = []

export const types = [...Parent.Types, ...Child.Types]
