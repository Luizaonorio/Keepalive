import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login/styled';
import Home from './pages/Home/index';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/home" element= {<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router