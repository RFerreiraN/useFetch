import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UsersComponent } from './Components/UsersComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersComponent/>
  </StrictMode>,
)
