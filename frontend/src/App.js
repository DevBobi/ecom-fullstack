import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './screens/Home/Home';
import Layout from './components/Layout/Layout';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import NotFound from './screens/404/NotFound';
import ProductDashboard from './components/ProductDashboard/ProductDashboard';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playground" element={<ProductDashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>

    </Router>
  );
}

export default App;
