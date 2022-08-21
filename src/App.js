import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './components/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/auth/auth.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App;
