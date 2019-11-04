import React from 'react'

interface MyProps {
  children: React.ReactNode
}
export default class DefaultErrorBoundary extends React.Component<MyProps> {
  state = {
    isError: false
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Something went wrong!</div> : children
  }
}
