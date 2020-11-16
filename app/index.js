import React from 'react'
// Just cause you are using React it doesn't necessarily mean you are
// rendering it on a browser.
import ReactDOM from 'react-dom'
import './index.css'
// so that the styles are active on the JSX. Works because of the wabpack config,
// where I have defined the css style loaders

// COMPONENT

// State
// Lifecycle
// UI -> render() describes what the UI looks like

// JSX
class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
