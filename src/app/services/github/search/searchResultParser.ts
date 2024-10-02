import userParser, { User, UserParsed } from '@/app/services/github/user/userParser'

export interface SearchResParsed {
  id: string
  full_name: string
  url: string
  owner: UserParsed
}

type SearchResult = {
  id: string
  full_name: string
  url: string
  owner: User
}

export default function searchResParser(result: SearchResult): SearchResParsed {
  return {
    id: result.id,
    full_name: result.full_name,
    url: result.url,
    owner: userParser(result.owner),
  }
}
