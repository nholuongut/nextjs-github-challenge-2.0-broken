export interface UserParsed {
  avatar_url: string
  url: string
  name: string
}

export type User = {
  login: string
  url: string
  avatar_url: string
}

export default function userParser(user: User): UserParsed {
  return {
    name: user.login,
    url: user.url,
    avatar_url: user.avatar_url,
  }
}
