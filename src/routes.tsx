import { useState } from 'react';
import Reset from './UI/Globalstyle';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home/styled';

function Router() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element {...<Login />} />
        <Route path="/home" element {...<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router