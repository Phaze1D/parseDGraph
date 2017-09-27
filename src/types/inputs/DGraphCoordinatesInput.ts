import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql'


/**
*
*/
export const DGraphCoordinatesInput = new GraphQLInputObjectType({
  name: 'DGraphCoordinatesInput',
  description: '',
  fields: {
    long: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    lat: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
})