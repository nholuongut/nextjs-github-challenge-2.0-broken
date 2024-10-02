import search from '@/app/services/github/search/search'
import { type NextRequest } from 'next/server'
 
export async function POST(request: NextRequest) {
  const data = await request.json()
  const query = await data.q
  console.log(query)
  if (!query) {
    return new Response(`Missing query`, {
        status: 400,
      })
  }
  const searchRes = await search({ query: query })
  return Response.json({ result: searchRes })
}