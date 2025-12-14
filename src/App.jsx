import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

  const promiseCountries = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())

  return (
    <>
      <h1>React Rian On The Go...</h1>
      <Suspense fallback={<p>Countries are loading...</p>}>
        <Countries promiseCountries = {promiseCountries}></Countries>
      </Suspense>
    </>
  )
}

export default App
