import React from 'react'

export default function About() {
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
      <img
        src="https://avatars.githubusercontent.com/u/63113235?v=4"
        alt="author pic"
      />
      <p>
        My name is Zulfa Fatah Akbar Ahmad from group 34 PMDP. I am a Computer
        Engineering student at Diponegoro University. Passionate on Front-end
        Developer. Go check My{' '}
        <a href="https://github.com/Zulfaabam" target="_blank" rel="noreferrer">
          Github
        </a>{' '}
        or My{' '}
        <a href="https://abams.vercel.app/" target="_blank" rel="noreferrer">
          Website
        </a>{' '}
        for another project.
      </p>
    </div>
  )
}
