import GitHub from 'github-api'

const client = new GitHub()

export default function getClient(): any {
  return client
}
