//https://reactjs.org/docs/error-boundaries.html

import React, { Component } from 'react';

class ErrorBoundary extends React.Component {
	state={
		hasError: false
	}


	componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.Please refresh the page or try again later.</h1>;
    }
    return this.props.children;
  }

}

export default ErrorBoundary;