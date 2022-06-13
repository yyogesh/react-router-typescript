import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />} >
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
