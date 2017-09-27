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
export const DGraphPolygonInput = new GraphQLInputObjectType({
  name: 'DGraphPolygonInput',
  description: '',
  fields: {
    predicate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    polygon: {
      type: new GraphQLNonNull(new GraphQLList(DGraphCoordinatesInput))
    }
  }
})