import getClient from '@/app/services/github/github'
import searchResParser, { SearchResParsed } from '@/app/services/github/search/searchResultParser'

export default async function search({ query }: { query: string }): Promise<SearchResParsed[]> {
  const results = getClient().search({ q: query }).forRepositories()
  return results.data.map(searchResParser)
}
