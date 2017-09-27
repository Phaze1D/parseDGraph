import { DGraphLogicInput } from 'types/inputs'
import {
  GraphQLDirective,
  GraphQLNonNull,
  DirectiveLocation
} from 'graphql'



/**
*
*/
export const DGraphFilterDirective = new GraphQLDirective({
  name: 'filter',
  description: 'Directive func for DGraph',
  locations: [ // TODO: Missing validation only on Node type
    DirectiveLocation.FIELD
  ],
  args: {
    func: {
      type: new GraphQLNonNull(DGraphLogicInput)
    }
  },
})