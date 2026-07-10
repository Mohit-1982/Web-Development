import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { client } from "./lib/appwrite";

client.ping();

createRoot(document.getElementById('root')).render(
    <App />
)
