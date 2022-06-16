import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import React from 'react';
import Profile from './components/Profile';
import { AuthProvider } from './common/AuthProvider';
import Login from './components/Login';
import RequireAuth from './common/RequireAuth';

const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<React.Suspense fallback="Loadding....">
            <LazyAbout />
          </React.Suspense>} />
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />} >
            <Route path="featured" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProduct />} />
          </Route>
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
