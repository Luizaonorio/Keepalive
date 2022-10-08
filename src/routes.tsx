import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Register from './pages/Registration/index';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/register" element= {<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router