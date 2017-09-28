import { parseDGraph } from 'utils/parser'
import { GraphQLDateTime } from 'graphql-iso-date'
import {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql'



/**
interface Person {
  name: String!
}
*/
const personInterface = new GraphQLInterfaceType({
  name: 'Person',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})


/**
type Movie {
  title: String!
  starring: [Real]
  genres: [Genre]
  directors: [Real]
  initial_release_date: Date
  characters: [Fictional]
}
*/
const movieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    starring: {
      type: new GraphQLList(realType)
    },
    genres: {
      type: new GraphQLList(genreType)
    },
    directors: {
      type: new GraphQLList(realType)
    },
    characters: {
      type: new GraphQLList(fictionalType)
    },
    initial_release_date: {
      type: GraphQLDateTime
    },
  }),
})


/**
type Real implements Person {
  name: String!
  directed: [Movie]
  acted: [Movie]
}
*/
const realType = new GraphQLObjectType({
  name: 'Real',
  interfaces: [personInterface],
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    directed: {
      type: new GraphQLList(movieType)
    },
    acted: {
      type: new GraphQLList(movieType)
    }
  })
})


/**
type Fictional implements Person {
  name: String!
  playedBy: [Real]
  in: [Movie]
}
*/
const fictionalType = new GraphQLObjectType({
  name: 'Fictional',
  interfaces: [personInterface],
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    playedBy: {
      type: new GraphQLList(realType)
    },
    in: {
      type: new GraphQLList(movieType)
    }
  })
})


/**
type Genre {
  genre: String!
  movies: [Movie]
}
*/
const genreType = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    genre: {
      type: new GraphQLNonNull(GraphQLString)
    },
    movies: {
      type: new GraphQLList(movieType)
    }
  })
})


/**
*
*/
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    movie: {
      type: movieType,
      resolve: (root, input, context, info) => parseDGraph(info)
    }
  })
})


/**
*
*/
export const Schema = new GraphQLSchema({
  query: queryType,
  types: [
    movieType,
    realType,
    fictionalType,
    genreType
  ]
})