// https://dev.to/smeijer/typescript-type-guards-and-type-predicates-4m5e

// A type guard is an expression that performs a runtime check that guarantees the type in the current scope.

interface Song {
  name: string
  artist: string
}

interface Movie {
  title: string
  mainCharacter: string
}

type BannerContent = Song | Movie

/* 
  // does not work
  const renderBannerTitle = (content: BannerContent) => {
    if (content.name) {
      return `Song: ${content.name}`
    }

    return `Movie: ${content.title}`
  }

  // type guard - works
  const renderBannerTitle = (content: BannerContent) => {
    if ('name' in content) {
      return `Song: ${content.name}`
    }

    return `Movie: ${content.title}`
  }
*/

// type predicate: (content is Song)

const isSong = (content: BannerContent): content is Song => 'name' in content

export const renderBannerTitle = (content: BannerContent) => {
  if (isSong(content)) {
    return `Song: ${content.name}`
  }

  return `Movie: ${content.title}`
}
/*
  // examples
  const song = {
    name: 'ha',
    artist: 'ba'
  }

  const movie = {
    title: 'he',
    mainCharacter: 'be'
  }

  const error = {
    name: 'he',
    ad: 'be'
  }

  console.log(renderBannerTitle(song))
  console.log(renderBannerTitle(movie))
  console.log(renderBannerTitle(error))
*/
