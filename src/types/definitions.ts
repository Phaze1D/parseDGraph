import {
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType,
  Thunk
} from 'graphql'


/**
*
*/
const nonNullPredicate = {
  predicate: {
    type: new GraphQLNonNull(GraphQLString),
  }
}


/**
*
*/
export const DGraphTermInput = new GraphQLInputObjectType({
  name: 'DGraphTermInput',
  description: '',
  fields: {
    ...nonNullPredicate,
    terms: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})


/**
*
*/
export const DGraphRegexpInput = new GraphQLInputObjectType({
  name: 'DGraphRegexpInput',
  description: '',
  fields: {
    ...nonNullPredicate,
    reg: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})


/**
*
*/
export const DGraphExactInput = new GraphQLInputObjectType({
  name: 'DGraphExactInput',
  description: '',
  fields: {
    predicate: {
      type: GraphQLString
    },
    val: {
      type: GraphQLString
    },
    count: {
      type: GraphQLString
    },
    values: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    }
  }
})


/**
*
*/
export const DGraphUIDInput = new GraphQLInputObjectType({
  name: 'DGraphUIDInput',
  description: '',
  fields: {
    uids: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    }
  }
})


/**
*
*/
export const DGraphUIDInInput = new GraphQLInputObjectType({
  name: 'DGraphUIDInInput',
  description: '',
  fields: {
    ...nonNullPredicate,
    uid: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})


/**
*
*/
export const DGraphHasInput = new GraphQLInputObjectType({
  name: 'DGraphHasInput',
  description: '',
  fields: {
    ...nonNullPredicate,
  }
})


/**
*
*/
export const DGraphCoordinatesInput = new GraphQLInputObjectType({
  name: 'DGraphCoordinatesInput',
  description: '',
  fields: {
    long: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    lat: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
})


/**
*
*/
export const DGraphNearInput = new GraphQLInputObjectType({
  name: 'DGraphNearInput',
  description: '',
  fields: {
    ...nonNullPredicate,
    coordinates: {
      type: new GraphQLNonNull(DGraphCoordinatesInput)
    }
  }
})


/**
*
*/
export const DGraphPolygonInput = new GraphQLInputObjectType({
  name: 'DGraphPolygonInput',
  description: '',
  fields: {
    ...nonNullPredicate,
    polygon: {
      type: new GraphQLNonNull(new GraphQLList(DGraphCoordinatesInput))
    }
  }
})


/**
*
*/
export const DGraphContainInput = new GraphQLInputObjectType({
  name: 'DGraphContainInput',
  description: '',
  fields: {
    ...nonNullPredicate,
    coordinates: {
      type: DGraphCoordinatesInput
    },
    polygon: {
      type: new GraphQLList(DGraphCoordinatesInput)
    }
  }
})


/**
*
*/
export const DGraphFilterInput = new GraphQLInputObjectType({
  name: 'DGraphFilterInput',
  description: '',
  fields: {
    allofterms: {
      type: DGraphTermInput
    },
    anyofterms: {
      type: DGraphTermInput
    },
    regexp: {
      type: DGraphRegexpInput
    },
    alloftext: {
      type: DGraphTermInput
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


/**
*
*/
export const DGraphLogicInput = new GraphQLInputObjectType({
  name: 'DGraphLogicInput',
  description: '',
  fields: () => ({
    l1: {
      type: DGraphLogicInput
    },
    f1: {
      type: DGraphFilterInput
    },
    l2: {
      type: DGraphLogicInput
    },
    f2: {
      type: DGraphFilterInput
    },
    c: {
      type: DGraphConditionEmun
    }
  })
})
