import { DGraphCoordinatesInput } from './DGraphCoordinatesInput'
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

/**
*
*/
export const DGraphContainInput = new GraphQLInputObjectType({
  name: 'DGraphContainInput',
  description: '',
  fields: {
    predicate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    coordinates: {
      type: DGraphCoordinatesInput
    },
    polygon: {
      type: new GraphQLList(DGraphCoordinatesInput)
    }
  }
})