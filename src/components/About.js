import React, { useState, useEffect } from 'react'
import './About.css'
import axios from 'axios'

export default function About() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true)
      try {
        const response = await axios.get(
          `https://api.github.com/users/Zulfaabam`
        )
        if (response.status === 200) {
          setData(response.data)
          // setLoading(false)
        }
      } catch (err) {
        // setLoading(true)
        // setError(err)
      }
    }

    fetchData()
  }, [])
  console.log(data)

  return (
    <div className="about grid-container">
      <h1>About App</h1>
      <p>
        This Pokedex App was made to fulfill Final Assignment of Mobile Device
        Programming Practice. This App was created with React PWA technology,
        using{' '}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeAPI
        </a>{' '}
        to get the Pokemon data.
      </p>
      <h2>About Author</h2>
      <img src={data.avatar_url} alt="author pic" />
      <p>
        My name is {data.name} from group 34 PMDP. I am a Computer Engineering
        student at Diponegoro University. Passionate on Front-end Developer. Go
        check My{' '}
        <a href={data.html_url} target="_blank" rel="noreferrer">
          Github
        </a>{' '}
        and My{' '}
        <a href={data.blog} target="_blank" rel="noreferrer">
          Website
        </a>{' '}
        for another project.
      </p>
    </div>
  )
}
