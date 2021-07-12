import React, { Suspense } from 'react';
import { graphql } from 'babel-plugin-relay/macro'
import {
  RelayEnvironmentProvider,
  useLazyLoadQuery,
} from 'react-relay/hooks'

import { AppQuery } from './__generated__/AppQuery.graphql'
import RelayEnvironment from './relay/RelayEnvironment'
import './App.css';

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        videosByTitle (title: "Ronaldinho") {
          items { _id: id { kind, videoId }, snippet { title } }
        }
        moviesByTitle (title: "Ronaldinho") {
          Search { Title, Year }
        }
      }
    `,
    {},
    {},
  )

  if (!data || !data.videosByTitle || !data.videosByTitle.items || !data.moviesByTitle || !data.moviesByTitle.Search) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Videos list</p>
          <ul>
            {data.videosByTitle.items.map((item) => (
              <li key={item?._id?.videoId}>Title: {item?.snippet?.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Movies list</p>
          <ul>
            {data.moviesByTitle.Search.map((item) => (
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
