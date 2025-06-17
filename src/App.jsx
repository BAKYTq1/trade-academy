import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routes/router';
import './widgets/styles/App.css'

function App() {
  return (
    <div className=''>
      <RouterProvider router={myRouter}/>
      
    </div>
  )
}

export default App
