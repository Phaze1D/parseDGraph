import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType
} from "graphql";


/**
*
*/
export const DGraphVarInput = new GraphQLInputObjectType({
  name: 'DGraphVarInput',
  description: '',
  fields: {
    varName: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})