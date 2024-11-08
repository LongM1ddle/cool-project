import { useState } from 'react'
import './App.css'
import nameMessage from './components/Name/name.jsx'
import titleButton from './components/Title/title.jsx'
import InputWithType from './components/Input/input.jsx'
import ItemList from './components/Itemlist/itemlist.jsx'
import greetingByTime from './components/GreetingByTime/greetingByTime.jsx'
import ProductList from './components/ProductList/productList.jsx'
import Notification from './components/Notification/notification.jsx'
import DataLoader from './components/DataLoader/dataLoader.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>
        {nameMessage({name: "Argen"})}
        {greetingByTime()}
      </h1>
      {InputWithType({type: "text"})}
      {titleButton({title:"Argen"})}
      {ItemList({items:["argen", "daniel", "vlad"]})}
      <div className="card">
      {DataLoader()}
      {Notification()}
      </div>
      
    </>
  )
}

export default App
