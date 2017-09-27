import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'


/**
*
*/
export const DGraphRegexpInput = new GraphQLInputObjectType({
  name: 'DGraphRegexpInput',
  description: '',
  fields: {
    predicate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    reg: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})