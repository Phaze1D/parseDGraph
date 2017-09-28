import * as faker from 'faker'


export function realFac() {
  return {
    id: "_:" + faker.random.uuid().replace(/-/g, ''),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    directed: [],
    acted: []
  }
}

export function ficFac() {
  return {
    id: "_:" +faker.random.uuid().replace(/-/g, ''),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    playedBy: [],
    in: []
  }
}


export function genreFac() {
  return {
    id: "_:" +faker.random.uuid().replace(/-/g, ''),
    genre: faker.random.word(),
    movies: []
  }
}


export function movieFac() {
  return {
    id: "_:" +faker.random.uuid().replace(/-/g, ''),
    title: faker.company.companyName(),
    initial_release_date: faker.date.past(),
    genres: [],
    directors: [],
    starring: [],
    characters: []
  }
}



export function createGraph(){
  let totalMovies = faker.random.number({min: 1, max: 10})
  let totalPeople = faker.random.number({min: 1, max: 10})
  let totalGenre = faker.random.number({min: 1, max: 10})

  let setRealIds = new Set<string>()
  let setFicIds = new Set<string>()
  let setMovieIds= new Set<string>()
  let setGenreIds= new Set<string>()

  let ds = ``

  let realMap = {}
  let ficMap = {}
  let movieMap = {}
  let genreMap = {}

  for(let i = 0; i < totalMovies; i++){
    let movie = movieFac()
    ds += `
      ${movie.id} <title> ${movie.title} .
      ${movie.id} <initial_release_date> ${movie.initial_release_date.toISOString()} .
    `
    movieMap[movie.id] = movie
    setMovieIds.add(movie.id)
  }


  for(let i = 0; i < totalPeople; i++){
    if(faker.random.boolean()){
      let real = realFac()
      realMap[real.id] = real
      setRealIds.add(real.id)

      ds += `
        ${real.id} <name> ${real.name} .
      `
    }else{
      let fic = ficFac()
      ds += `
        ${fic.id} <name> ${fic.name} .
      `
      ficMap[fic.id] = fic
      setFicIds.add(fic.id)
    }
  }


  for(let i = 0; i < totalMovies; i++){
    let genre = genreFac()
    ds += `
      ${genre.id} <genre> ${genre.genre} .
    `
    genreMap[genre.id] = genre
    setGenreIds.add(genre.id)
  }


  for(let gid of setGenreIds){
    let movies = randomSubSet(setMovieIds)
    genreMap[gid].movies = movies



    movies.forEach(mid => {
      ds += `
        ${mid} <genres> ${gid} .
      `
      movieMap[mid].genres.push(gid)
    })
  }

  for(let rid of setRealIds){
    let drids = randomSubSet(setMovieIds)
    let actedid = randomSubSet(setMovieIds)
    realMap[rid].acted = drids
    realMap[rid].directed = drids

    drids.forEach(mid => movieMap[mid].directors.push(rid))
    actedid.forEach(mid => movieMap[mid].starring.push(rid))
  }


  for(let mid of setMovieIds){
    for(let aid of movieMap[mid].starring){
      let cids = randomSubSet(setFicIds)
      movieMap[mid].characters = cids
      cids.forEach(cid => {
        ficMap[cid].in.push(mid)
        ficMap[cid].playedBy.push(aid)
      })
    }
  }

  // console.log(ds)
}


export function randomSubSet(set: Set<string>, smax?: number): string[] {
  let a = Array.from(set)
  let min = faker.random.number({min: 0, max: a.length})
  let max = faker.random.number({min: min + 1, max: a.length})

  if(smax){
    let mm = min + 1 + smax > a.length ? a.length : min + 1 + smax
    max = faker.random.number({min: min + 1, max: mm})
  }

  return a.slice(min,max)
}