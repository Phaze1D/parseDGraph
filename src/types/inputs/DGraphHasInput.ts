import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'


/**
*
*/
export const DGraphHasInput = new GraphQLInputObjectType({
  name: 'DGraphHasInput',
  description: '',
  fields: {
    predicate: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }
})