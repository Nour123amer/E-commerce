import "./App.css";
import Layout from "./component/AuthLayout/AuthLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AuthLayout from "./component/AuthLayout/AuthLayout";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import Register from "./pages/Register/Register";
import { Toaster } from "react-hot-toast";
import UserProvider from "./Context/User.context";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./Context/Cart.context";
import Categories from "./pages/Categories/Categories";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Brands from "./pages/Brands/Brands";
import Product from "./pages/Product/Product";
function App() {
  const queryClient = new QueryClient();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "category/:id", element: <h2>category</h2> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "cart", element: <Cart /> },
        { path: "categories", element: <Categories /> },
        { path: "brands", element: <Brands /> },
        { path: "products", element: <Product /> },
        { path: "*", element: <NotFound /> },
      ],
    },

    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Register /> },
      ],
    },
  ]);
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
