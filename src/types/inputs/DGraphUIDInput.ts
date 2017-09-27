import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

import { DGraphVarInput } from './DGraphVarInput';



/**
*
*/
export const DGraphUIDInput = new GraphQLInputObjectType({
  name: 'DGraphUIDInput',
  description: '',
  fields: {
    uids: {
      type: new GraphQLList(GraphQLString)
    },
    vars: {
      type: new GraphQLList(DGraphVarInput)
    }
  }
})