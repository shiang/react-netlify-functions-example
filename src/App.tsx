import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'

const App: React.FC<{}> = () => {
  return (
    <>
      <Counter />
    </>
  )
}

export default hot(module)(App)
