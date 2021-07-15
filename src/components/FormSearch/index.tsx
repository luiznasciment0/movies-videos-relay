import React, { Suspense, useState } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { fetchQuery, useLazyLoadQuery } from 'react-relay/hooks'

import RelayEnvironment from '../../relay/RelayEnvironment'
import {
  FormSearchQuery,
  FormSearchQueryResponse
} from './__generated__/FormSearchQuery.graphql'
import { useSearch } from 'context/searchContext'

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

function FormSearch() {
  const { searchValue } = useSearch()
  const title = searchValue || ''
  const data = useLazyLoadQuery<FormSearchQuery>(formSearchQuery, {
    title
  })

  return (
    <div className="App">
      <div>
        <p>Videos list</p>
        <ul>
          {data?.videosByTitle?.items?.map((item) => (
            <li key={item?._id?.videoId}>Title: {item?.snippet?.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Movies list</p>
        <ul>
          {data?.moviesByTitle?.Search?.map((item, index) => (
            <li key={`key-${item?.Title}-${index}`}>Title: {item?.Title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FormSearch
