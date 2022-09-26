import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login/styled';
import Home from './components/pages/Home/styled';

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