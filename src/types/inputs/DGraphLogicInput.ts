import { GraphQLInputObjectType } from 'graphql'
import { DGraphFilterInput } from './DGraphFilterInput'
import { DGraphConditionEmun } from 'types/emuns'

/**
*
*/
export const DGraphLogicInput = new GraphQLInputObjectType({
  name: 'DGraphLogicInput',
  description: '',
  fields: () => ({
    logic1: {
      type: DGraphLogicInput
    },
    filter1: {
      type: DGraphFilterInput
    },
    logic2: {
      type: DGraphLogicInput
    },
    filter2: {
      type: DGraphFilterInput
    },
    cond: {
      type: DGraphConditionEmun
    }
  })
})