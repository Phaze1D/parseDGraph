import { GraphQLEnumType } from 'graphql'

/**
*
*/
export const DGraphConditionEmun = new GraphQLEnumType({
  name: 'DGraphConditionEmun',
  values: {
    AND: { value: 'AND' },
    OR: { value: 'OR' },
    NOT: { value: 'NOT' }
  }
})