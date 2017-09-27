import {
  DirectiveLocation,
  GraphQLDirective
} from "graphql";





/**
*
*/
export const DGraphIgnorereFlexDirective = new GraphQLDirective({
  name: 'ignorereflex',
  description: 'Directive ignorereflex for DGraph',
  locations: [ // TODO: Needs validations only on root field
    DirectiveLocation.FIELD
  ],
})