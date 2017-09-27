import { DGraphCoordinatesInput } from './DGraphCoordinatesInput'
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

/**
*
*/
export const DGraphNearInput = new GraphQLInputObjectType({
  name: 'DGraphNearInput',
  description: '',
  fields: {
    predicate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    coordinates: {
      type: new GraphQLNonNull(DGraphCoordinatesInput)
    }
  }
})