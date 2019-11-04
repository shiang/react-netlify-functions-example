import React, { useState } from 'react'

const Warning = React.lazy(() => import('./Warning'))

const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <main>
      <h2 className={count > 10 ? 'warning' : undefined}>{count}</h2>
      <button type='button' onClick={increment}>
        +
      </button>
      <button type='button' onClick={decrement}>
        -
      </button>
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </main>
  )
}

export default Counter
