import {
  GraphQLDirective,
  GraphQLNonNull,
  GraphQLString,
  DirectiveLocation
} from 'graphql'


/**
*
*/
export const DGraphVarDefDirective = new GraphQLDirective({
  name: 'as',
  description: 'Directive for DGraph var definition',
  locations: [ // TODO: Missing validation only on Node type
    DirectiveLocation.FIELD
  ],
  args: {
    var: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
})