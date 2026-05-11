import { Route, Routes } from 'react-router-dom';

import Admin from '../Screens/Admin';
import Contact from '../Contact';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Screens/Home';
import Products from '../Screens/Products';
import ScrollToTop from '../ScrollToTop';
import SelectedProduct from '../Screens/Products/SelectedProduct';
import { WrapStyle } from './WrapStyle';

export default function WrapRoutes() {
  return (
    <WrapStyle>
      <ScrollToTop />
      <Routes>
        {/* Admin route — no Header */}
        <Route path="/admin" element={<Admin />} />

        {/* Public routes — with Header */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/item/:id" element={<SelectedProduct />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </WrapStyle>
  );
}
