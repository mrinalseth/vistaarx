import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Connections from './components/Connections'
import Nav from './components/Nav'
import Header from './components/Header'
import './components/app.css'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('./data.json')
      setData(res.data.data)
    }
    fetch()
  }, [])
  let reqReceived = (
    <div>
      {data.map((element) => {
        if(element.connected) {
          return (
            <Connections
              key={element.name}
              name={element.name}
              job={element.job}
              connections={element.connections}
              avatar={element.avatar}
            />
          )
        }
      })}
    </div>
  )

  let suggestions = (
    <div className="suggestions">
      {data.map((element) => {
        if(!element.connected) {
          return (
            <Card
              key={element.name}
              name={element.name}
              job={element.job}
              connections={element.connections}
              avatar={element.avatar}
            />
          )
        }
      })}
    </div>
  )


  return (
    <div>
      <Nav/>
      <Header/>
      <div className="container">
        <div className="divider">
          <hr />
          {/* <span>Yoy have 2 new Connections</span> */}
        </div>
        {reqReceived}
        <div className="divider">
          <hr />
          {/* <span>Yoy have 2 new Connections</span> */}
        </div>
        {suggestions}
      </div>
    </div>
  )
}

export default App
