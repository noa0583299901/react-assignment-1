import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './components/Post'

function App() {
  return (
    <>
    <Post author="Noa Knopf" content="this is my first post" />
     <Post author="Tamar" content=" Hi" />
      <Post author="Shira"  />
      </>
  );
}
export default App
