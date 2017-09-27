import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'


/**
*
*/
export const DGraphTermsInput = new GraphQLInputObjectType({
  name: 'DGraphTermsInput',
  description: '',
  fields: {
    predicate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    terms: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})