import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'

import Layout from './components/Layout'
import RelayEnvironment from './relay/RelayEnvironment'

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Layout />
    </RelayEnvironmentProvider>
  )
}

export default AppRoot
