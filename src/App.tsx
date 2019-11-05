import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'
import { IdentityContextProvider } from 'react-netlify-identity-widget'
import Auth from './Auth'

const App: React.FC<{}> = () => {
  const url = process.env.NETLIFY_URL!
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
