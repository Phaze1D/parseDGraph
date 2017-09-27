import { GraphQLInputObjectType } from 'graphql'
import { DGraphTermsInput } from './DGraphTermsInput'
import { DGraphRegexpInput } from './DGraphRegexpInput'
import { DGraphExactInput } from './DGraphExactInput'
import { DGraphUIDInput } from './DGraphUIDInput'
import { DGraphUIDInInput } from './DGraphUIDInInput'
import { DGraphHasInput } from './DGraphHasInput'
import { DGraphNearInput } from './DGraphNearInput'
import { DGraphPolygonInput } from './DGraphPolygonInput'
import { DGraphContainInput } from './DGraphContainInput'

/**
*
*/
export const DGraphFilterInput = new GraphQLInputObjectType({
  name: 'DGraphFilterInput',
  description: '',
  fields: {
    allofterms: {
      type: DGraphTermsInput
    },
    anyofterms: {
      type: DGraphTermsInput
    },
    regexp: {
      type: DGraphRegexpInput
    },
    alloftext: {
      type: DGraphTermsInput
    },
    eq: {
      type: DGraphExactInput
    },
    le: {
      type: DGraphExactInput
    },
    lt: {
      type: DGraphExactInput
    },
    ge: {
      type: DGraphExactInput
    },
    gt: {
      type: DGraphExactInput
    },
    uid: {
      type: DGraphUIDInput
    },
    uid_in: { // NOTE: NOT ALLOW IN ROOT
      type: DGraphUIDInInput
    },
    has: {
      type: DGraphHasInput
    },
    near: {
      type: DGraphNearInput
    },
    within: {
      type: DGraphPolygonInput
    },
    contains: {
      type: DGraphContainInput
    },
    intersects: {
      type: DGraphPolygonInput
    },
  }
})