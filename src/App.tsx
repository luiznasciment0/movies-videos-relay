import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'

import FormSearch from './components/FormSearch'
import RelayEnvironment from './relay/RelayEnvironment'

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <FormSearch />
    </RelayEnvironmentProvider>
  )
}

export default AppRoot
