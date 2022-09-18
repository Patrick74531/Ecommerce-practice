import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/auth/auth.component';
import Checkout from './routes/checkout/checkout.component';
import { checkUserSession } from './store/user/user.action'
import UserAccount from './components/user-account/user-account.component';
import UserOrders from './components/user-orders/user-orders.component';
import UpdateInfo from './components/update-info/update-info.componnet';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='user-account' element={<UserAccount />} />
        <Route path='user-orders' element={<UserOrders />} />
        <Route path='update-info' element={<UpdateInfo />} />
      </Route>
    </Routes>
  )
}

export default App;
