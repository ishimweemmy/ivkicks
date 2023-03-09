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
const Notfound = lazyLoad("../pages/NotFound", "Notfound");
const Allproducts = lazy(
  () => import("./pages/Products/AllProducts/Allproducts")
);
const Sale = lazy(() => import("./pages/Sale"));
const Products = lazy(() => import("./pages/Products/NonProducts/Products"));
const Promo = lazy(() => import("./pages/Products/Promo/PromoProducts"));
const Men = lazy(() => import("./pages/Products/NonProducts/Men"));
const Women = lazy(() => import("./pages/Products/NonProducts/Women"));
import Product from "./components/Products/Product";
import Auth from "./pages/auth/Auth";
const Shipping = lazy(() => import("./components/cart/shipping/Shipping"));
const Billing = lazy(() => import("./components/cart/shipping/Billing"));
const CartItems = lazy(() => import("./components/cart/CartItems"))
const Address = lazy(() => import("./components/cart/shipping/Address"))
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
        <Route path="cart" element={<Cart />}>
          <Route path="" element={<CartItems />} />
          <Route path="address" element={<Address />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="billing" element={<Billing />} />
        </Route>

        {/* Auth pages */}

        <Route path="auth" element={<Auth />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
