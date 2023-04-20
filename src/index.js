import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElenentById('root'))

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
