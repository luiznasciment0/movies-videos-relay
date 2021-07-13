import React from 'react';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks'

import FormSearch from './components/FormSearch'
import RelayEnvironment from './relay/RelayEnvironment'
import './App.css';

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <FormSearch />
    </RelayEnvironmentProvider>
  )
}

export default AppRoot;
