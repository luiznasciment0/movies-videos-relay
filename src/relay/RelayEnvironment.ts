import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime'
import fetchGraphQL from '../services/fetchGraphQL'

const fetchRelay: FetchFunction = async (params) => await fetchGraphQL(params.text as string)


export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})