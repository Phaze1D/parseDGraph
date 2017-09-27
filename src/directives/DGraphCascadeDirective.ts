import {
  DirectiveLocation,
  GraphQLDirective
} from 'graphql'

/**
*
*/
export const DGraphCascadeDirective = new GraphQLDirective({
  name: 'cascade',
  description: 'Directive cascade for DGraph',
  locations: [ // TODO: Needs validations only on root field
    DirectiveLocation.FIELD,
  ],
})