import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/c1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Usercontext from './UserContext.jsx';

import store from './store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />

</Provider>


 

    
 
)
