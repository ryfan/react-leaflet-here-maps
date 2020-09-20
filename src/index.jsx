import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'
import 'leaflet/dist/leaflet.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/custom.css'

ReactDOM.render((
  <Router>
      <Route path="/" name="App" component={App}/>
  </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
