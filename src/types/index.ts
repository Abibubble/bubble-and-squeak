export interface EscapeRoom {
  id: number
  datePlayed: string
  location: string
  country: string
  company: string
  name: string
  theme: string
  duration: number
  price: string
  theming: number
  puzzles: number
  gamesMaster: number
  value: number
  fun: number
  total: string
  escaped: 'Y' | 'N'
  photo: 'Y' | 'N'
  timeRemaining: number | null
  teamSize: number
  gamesMasterName: string
  description: string
  link: string
  languages: string
  status: string
  difficulty: number | null
  minPlayers: number | null
  maxPlayers: number | null
  minAge: number | null
  escapePercentage: string | null
  review: string
  [key: string]: any // Allow index access for dynamic property access
}

export interface Park {
  name: string
  location: string
  country: string
  link: string
  yearOpened: number
}

export interface Coaster {
  name: string
  park: string
  manufacturer: string
  model: string
  level: string
  car: string
  ridability: string
  type: string
  material: string
  height: string
  dropHeight: string
  length: string
  speed: string
  duration: string
  inversions: number
  yearOpened: number | string
  yearClosed: number | string
  heightRequirement: string
  fastPassAvailable: string
  capacity: number | null
  previousNames: string
  description: string
  review: string
}

export interface Ratings {
  [key: string]: number
}
