import React, { Suspense } from 'react';
import { graphql } from 'babel-plugin-relay/macro'
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks'

import RelayEnvironment from './relay/RelayEnvironment'
import './App.css';
import { OperationType } from 'relay-runtime';

const MoviesAndVideosByTitleQuery = graphql`
  query AppQuery {
    videosByTitle (title: "Ronaldinho") {
      items { _id: id { kind, videoId }, snippet { title } }
    }
    moviesByTitle (title: "Ronaldinho") {
      Search { Title, Year }
    }
  }
`

const preloadedQuery = loadQuery(RelayEnvironment, MoviesAndVideosByTitleQuery, {})

function App({ preloadedQuery }: { preloadedQuery: PreloadedQuery<OperationType, {}> }) {
  const data: any = usePreloadedQuery(MoviesAndVideosByTitleQuery, preloadedQuery)

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.videosByTitle.items[0].snippet.title}</p>
        <p>{data.moviesByTitle.Search[0].Title}</p>
      </header>
    </div>
  )
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot;
