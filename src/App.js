import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/auth/auth.component';
import Checkout from './routes/checkout/checkout.component';
import { onAuthStateChangedLisener, createUserDocumentFromAuth, getCurrentUser } from './utils/firebase/firebase.utils'
import { checkUserSession, setCurrentUser } from './store/user/user.action'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    // const unsubcribe = onAuthStateChangedLisener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubcribe;
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
