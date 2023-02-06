import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from "./data"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

export default function App() {

  const cards = data.map(item => {
    return (

      <Card 
      key= {item.id}
      {...item}
      />
    )

  })
  return (

    <div>
      <Navbar />
      <section className='cards-list'>
        {cards}
      </section>
    </div>

  )



}
