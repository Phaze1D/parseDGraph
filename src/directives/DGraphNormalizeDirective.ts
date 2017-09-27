import {
  DirectiveLocation,
  GraphQLDirective
} from "graphql";



/**
*
*/
export const DGraphNormalizeDirective = new GraphQLDirective({
  name: 'normalize',
  description: 'Directive normalize for DGraph',
  locations: [ // TODO: Needs validations only on root field
    DirectiveLocation.FIELD,
  ],
})