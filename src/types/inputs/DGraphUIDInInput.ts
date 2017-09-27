import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'


/**
*
*/
export const DGraphUIDInInput = new GraphQLInputObjectType({
  name: 'DGraphUIDInInput',
  description: '',
  fields: {
    predicate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    uid: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})