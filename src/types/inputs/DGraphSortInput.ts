import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql'

import { DGraphVarInput } from './DGraphVarInput'


/**
*
*/
export const DGraphSortInput = new GraphQLInputObjectType({
  name: 'DGraphSortInput',
  description: '',
  fields: {
    predicate: {
      type: GraphQLString
    },
    val: {
      type: DGraphVarInput
    }
  }
})