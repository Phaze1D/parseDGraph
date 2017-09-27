const schema = `
type Real implements Person {
  name: String!
  directed: [Movie]
  acted: [Movie]
}

type Fictional implements Person {
  name: String!
  playedBy: [Real]
  in: [Movie]
}

type Genre {
  genre: String!
  movies: [Movie]
}

type Movie {
  title: String!
  starring: [Real]
  genres: [Genre]
  directors: [Real]
  initial_release_date: Date
  characters: [Fictional]
}

interface Person {
  name: String!
}
`