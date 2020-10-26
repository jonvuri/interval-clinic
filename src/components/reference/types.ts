export type Genre = 'Pop' | 'Media' | 'Folk' | 'Jazz' | 'Western Classical'

export const SORT: Record<string, number> = {
  Pop: 1,
  Media: 2,
  Folk: 3,
  Jazz: 4,
  'Western Classical': 5,
}

export type ReferenceSong = {
  artist: string
  title: string
  description: string
  youtubeId: string
  youtubeStart: number
  youtubeNote?: string
}

export type ReferenceMap = {
  ascending: {
    [key in Genre]?: ReferenceSong[]
  }
  descending: {
    [key in Genre]?: ReferenceSong[]
  }
}
