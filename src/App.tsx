import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'
import { IdentityContextProvider } from 'react-netlify-identity-widget'
import Auth from './Auth'

const App: React.FC<{}> = () => {
  console.log(process.env)
  const url =
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
      ? process.env.NETLIFY_URL!
      : process.env.NETLIFY_PUBLIC_URL!
  return (
    <main>
      <IdentityContextProvider url={url}>
        <Auth>
          <Counter />
        </Auth>
      </IdentityContextProvider>
    </main>
  )
}

export default hot(module)(App)
