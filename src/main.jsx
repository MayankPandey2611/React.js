import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/c1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './UserContext.jsx';

createRoot(document.getElementById('root')).render(
    <UserContext>
    <App />

    </UserContext>
 
)
