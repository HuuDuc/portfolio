// import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
//import registerServiceWorker from './registerServiceWorker';
import router from './router'

ReactDOM.render(
  router(),
  document.getElementById('root')
)
//registerServiceWorker();
