// https://www.typescriptlang.org/docs/handbook/2/generics.html

// Generics example: to get rid of repetitions
interface PaginatedResponse<T> {
  data: T[],
  total: number,
  page: number,
  limit: number
}

interface Song { name: string }
export type SongsResponse = PaginatedResponse<Song>

interface Movie { title: string }
export type MoviesResponse = PaginatedResponse<Movie>

// usage examples
/*
  // works
  const songs: PaginatedResponse<Song> = {
    data: [{ name: "Armor" }],
    total: 10,
    page: 2,
    limit: 1
  }

  // does not work
  const movies: PaginatedResponse<Song> = {
    data: [{ title: "Little Women" }],
    total: 10,
    page: 2,
    limit: 1
  }

  const movies: PaginatedResponse<Movie> = {
    data: [{ title: "Little Women" }],
    total: 10,
    page: 2
  }

  const movies: PaginatedResponse<Movie> = {
    data: [{ title: "Little Women" }],
    total: 10,
    page: 2,
    limit: 'maximum'
  }
*/
