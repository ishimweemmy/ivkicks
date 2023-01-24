import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { lazy } from "react";
import { lazyLoad } from "./functions/lazyLoad";
const App = lazy(() => import("./App"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/auth/Login"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Notfound = lazyLoad("../pages/NotFound", "Notfound");
const Allproducts = lazy(
  () => import("./pages/Products/AllProducts/Allproducts")
);
const Sale = lazy(() => import("./pages/Sale"));
const Products = lazy(() => import("./pages/Products/NonProducts/Products"));
const Promo = lazy(() => import("./pages/Products/Promo/PromoProducts"));
const Men = lazy(() => import("./pages/Products/NonProducts/Men"));
const Women = lazy(() => import("./pages/Products/NonProducts/Women"));
const Product = lazy(() => import("./components/Products/Product"));
const Collections = lazy(() => import("./pages/Collections"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Allproducts />}>
          <Route path="" element={<Products />}>
            <Route path="men" element={<Men />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="women" element={<Women />}>
              <Route path=":productId" element={<Product />} />
            </Route>
          </Route>
          <Route path="promoProducts" element={<Promo />} />
          <Route path="collections" element={<Collections />} />
        </Route>
        <Route path="sale" element={<Sale />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />

        {/* Auth pages */}

        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
