import React from 'react'

export class ErrorBoundary extends React.Component {
  state = {
    error: undefined
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h4>Something went wrong.</h4>;
    }

    return this.props.children;
  }
}
