import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App.jsx';
import { AppContextProvider } from './context/AppContextProvider.jsx';
import {GoogleOAuthProvider} from "@react-oauth/google"

createRoot(document.getElementById('root')).render(
  
	<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
		<BrowserRouter>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</BrowserRouter>
	</GoogleOAuthProvider>
  
)
