import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLDirective,
  GraphQLNonNull,
  GraphQLInt,
  DirectiveLocation
} from 'graphql'

import {
  DGraphFilterInput,
  DGraphLogicInput
} from './definitions'


/**
*
*/
export const DGraphFilterDirective = new GraphQLDirective({
  name: 'filter',
  description: 'Directive filter for DGraph',
  locations: [ // TODO: Missing validation only on Node type
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT,
  ],
  args: {
    logic: {
      type: new GraphQLNonNull(DGraphLogicInput)
    }
  },
})


/**
*
*/
export const DGraphFirstDirective = new GraphQLDirective({
  name: 'first',
  description: 'Directive first for DGraph',
  locations: [ // TODO: Missing validation only on Node type
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT,
  ],
  args: {
    nodes: {
      type: new GraphQLNonNull(GraphQLInt),
      description: '',
    }
  }
})


/**
*
*/
export const DGraphOffsetDirective = new GraphQLDirective({
  name: 'offset',
  description: 'Directive offset for DGraph',
  locations: [ // TODO: Missing validation only on Node type
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT,
  ],
  args: {
    by: {
      type: new GraphQLNonNull(GraphQLInt),
      description: '',
    }
  }
})


/**
*
*/
export const DGraphAfterDirective = new GraphQLDirective({
  name: 'after',
  description: 'Directive after for DGraph',
  locations: [ // TODO: Missing validation only on Node type
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT,
  ],
  args: {
    nodes: {
      type: new GraphQLNonNull(GraphQLInt),
      description: '',
    }
  }
})


/**
*
*/
export const DGraphCascadeDirective = new GraphQLDirective({
  name: 'cascade',
  description: 'Directive cascade for DGraph',
  locations: [ // TODO: Needs validations only on root field
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT,
  ],
})


/**
*
*/
export const DGraphNormalizeDirective = new GraphQLDirective({
  name: 'normalize',
  description: 'Directive normalize for DGraph',
  locations: [ // TODO: Needs validations only on root field
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT,
  ],
})


/**
*
*/
export const DGraphIgnorereFlexDirective = new GraphQLDirective({
  name: 'ignorereflex',
  description: 'Directive ignorereflex for DGraph',
  locations: [ // TODO: Needs validations only on root field
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT,
  ],
})