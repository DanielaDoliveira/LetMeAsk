import {Button} from './components/Button'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import {Route,BrowserRouter} from 'react-router-dom'


export default function App() {
  return (
      <BrowserRouter>
                  <Route path = "/" exact component={Home}/> 
                  <Route path = "/rooms/new" component={NewRoom}/>
      </BrowserRouter>
 
  );
}

