import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'
import { IdentityContextProvider } from 'react-netlify-identity-widget'
import Auth from './Auth'
import axios from 'axios'

const App: React.FC<{}> = () => {
  const [url, setUrl] = React.useState<string>('')

  useEffect(() => {
    const fetchUrl = async () => {
      if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
      ) {
        setUrl(process.env.NETLIFY_URL!)
      } else {
        const res = await axios({
          method: 'get',
          url: '/.netlify/functions/hello-world'
        })

        if (res.status === 200 && res.data) {
          setUrl(res.data.url)
        }
      }
    }
    fetchUrl()
  }, [])

  if (url === '') {
    return <div>Loading...</div>
  }
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
