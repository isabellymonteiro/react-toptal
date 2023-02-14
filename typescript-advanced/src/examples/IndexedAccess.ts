// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

export interface Song {
  name: string
  artists: {
    name: string
    age: number
  }[]
  year: number
  album: string
}

type SongProperty = Song["name" | "year"]
type AllSongProperties = Song[keyof Song]
// type Wrong = Song["yer"] // does not work

// ----------------------------------------------

const cities = [
  {
    name: "Reykjavík",
    country: "Iceland"
  },
  {
    name: "Honolulu",
    country: "United States"
  }
]

type City = typeof cities[number]

// ----------------------------------------------

const exampleSong: Song = {
  name: "July",
  artists: [
    {
      name: "Noah Cyrus",
      age: 23
    },
    {
      name: "Leon Bridges",
      age: 33
    }
  ],
  year: 2019,
  album: "THE END OF EVERYTHING"
}

type Artist = typeof exampleSong["artists"][number]

// const Key = "artists" // does not work
type Key = "artists"
type Age = typeof exampleSong[Key][number]["age"]
