import React, { Suspense, useState } from 'react';
import { graphql } from 'babel-plugin-relay/macro'
import {
  fetchQuery,
  RelayEnvironmentProvider,
} from 'react-relay/hooks'

import { AppQuery, AppQueryResponse } from './__generated__/AppQuery.graphql'
import RelayEnvironment from './relay/RelayEnvironment'
import './App.css';

function App() {
  const [data, setData] = useState<AppQueryResponse>()
  const [inputValue, setInputValue] = useState('')
  
  const environment = RelayEnvironment
  const appQuery = graphql`
    query AppQuery($title: String!) {
      videosByTitle (title: $title) {
        items { _id: id { kind, videoId }, snippet { title } }
      }
      moviesByTitle (title: $title) {
        Search { Title, Year }
      }
    }
  `

  const fetchMoviesAndVideos = (title: string) => {
    fetchQuery<AppQuery>(
      environment,
      appQuery,
      {title: title}
    )
    .toPromise()
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.log('fetchMoviesAndVideos fetchQuery', error)
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
            {data?.moviesByTitle?.Search.map((item) => (
              <li key={`key-${item?.Title}-${item?.Year}`}>Title: {item?.Title}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot;
