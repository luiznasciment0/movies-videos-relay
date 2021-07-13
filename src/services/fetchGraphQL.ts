const fetchGraphQL = async (text: string, variables?: any) => {
  try {
    const response = await fetch(
      'https://movies-videos-graphql.herokuapp.com/graphql',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          query: text,
          variables
        })
      }
    )

    return await response.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default fetchGraphQL
