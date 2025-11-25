import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './assets/redux/store.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* ye karne se store component ko har jagah se har koi excess kar payega */}
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
