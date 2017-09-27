import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

import { DGraphVarInput } from './DGraphVarInput'


/**
*
*/
export const DGraphExactInput = new GraphQLInputObjectType({
  name: 'DGraphExactInput',
  description: '',
  fields: {
    predicate: {
      type: GraphQLString
    },
    val: {
      type: DGraphVarInput
    },
    count: {
      type: GraphQLString
    },
    values: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    }
  }
})