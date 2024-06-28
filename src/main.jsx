import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import Routing from './routes/Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Routing>
       <Home/>
    </Routing>
  </React.StrictMode>,
)