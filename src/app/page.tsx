'use client'

import { ReactElement, useState } from 'react'

interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement
}
interface SearchFormElements extends HTMLFormElement {
  readonly elements: FormElements
}

export default function Home(): ReactElement {
  const [results, setResults] = useState([])

  const search = async (e: React.FormEvent<SearchFormElements>) => {
    e.preventDefault()
    const q = e.currentTarget.elements.search.value

    const res = await fetch('/api/search', {
      body: JSON.stringify({
        q,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()

    setResults(result)
  }

  return (
    <div>
      <form onSubmit={search}>
        <input name="search" />
        <input type="submit" />
      </form>
      {JSON.stringify(results)}
    </div>
  )
}
