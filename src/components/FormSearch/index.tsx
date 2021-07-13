import React, { useState } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { fetchQuery } from 'react-relay/hooks'

import RelayEnvironment from '../../relay/RelayEnvironment'
import {
  FormSearchQuery,
  FormSearchQueryResponse
} from './__generated__/FormSearchQuery.graphql'

function FormSearch() {
  const [data, setData] = useState<FormSearchQueryResponse>()
  const [inputValue, setInputValue] = useState('')

  const environment = RelayEnvironment
  const formSearchQuery = graphql`
    query FormSearchQuery($title: String!) {
      videosByTitle(title: $title) {
        items {
          _id: id {
            kind
            videoId
          }
          snippet {
            title
          }
        }
      }
      moviesByTitle(title: $title) {
        Search {
          Title
          Year
        }
      }
    }
  `

  const fetchMoviesAndVideos = (title: string) => {
    fetchQuery<FormSearchQuery>(environment, formSearchQuery, {
      title: title
    }).subscribe({
      start: () => {
        console.log('start')
      },
      complete: () => {
        console.log('complete')
      },
      error: (error: any) => {
        console.log('error', error)
      },
      next: (data) => {
        console.log('next data', data)
        setData(data)
      }
    })
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchMoviesAndVideos(inputValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search videos and movies</label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            value={inputValue}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          <p>Videos list</p>
          <ul>
            {data?.videosByTitle?.items.map((item) => (
              <li key={item?._id?.videoId}>Title: {item?.snippet?.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Movies list</p>
          <ul>
            {data?.moviesByTitle?.Search.map((item, index) => (
              <li key={`key-${item?.Title}-${index}`}>Title: {item?.Title}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default FormSearch
