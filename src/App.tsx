import React, { useState, useEffect } from 'react';
import './App.css';
import fetchGraphQL from './services/fetchGraphQL';

function App() {
  const [movieTitle, setMovieTitle] = useState(null)
  const [videoTitle, setVideoTitle] = useState(null)

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query {
        videosByTitle (title: "Ronaldinho") {
          items { id { kind, videoId }, snippet { title } }
        }
        moviesByTitle (title: "Ronaldinho") {
          Search { Title, Year }
        }
      }
    `).then(response => {
      if (!isMounted) {
        return
      }

      const data = response.data
      setMovieTitle(data.videosByTitle.items[0].snippet.title)
      setVideoTitle(data.moviesByTitle.Search[0].Title)
    }).catch(error => {
      console.error(error)
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{movieTitle != null ? `Movie title: ${movieTitle}` : 'Loading'}</p>
        <p>{videoTitle != null ? `Movie title: ${videoTitle}` : 'Loading'}</p>
      </header>
    </div>
  );
}

export default App;
