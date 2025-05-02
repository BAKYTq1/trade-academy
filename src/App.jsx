import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routes/router';
import './App.css'

function App() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
      
    </div>
  )
}

export default App
