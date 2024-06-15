import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { userContext } from "./User.context";
import axios from "axios";

export const cartContext = createContext(null);

export default function CartProvider({ children }) {
  // !Error [1]
  const [cartInfo, setCartInfo] = useState(null);
  const { token } = useContext(userContext);
  async function getCartInfo() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      setCartInfo();
    } catch (error) {
      if (error.response.data.message.includes("No cart")) {
        setCartInfo([]);
      }
    }
  }

  async function removeProductFromCart({ id }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      setCartInfo(data);
      if (data.numOfCartItems == 0) {
        setCartInfo([]);
      } else {
        setCartInfo(data);
      }
      toast.success("product removed");
    } catch (error) {
      console.log(error);
      // setCartInfo([]);
      if (error.response.data.message.includes("No Cart")) {
      }
    }
  }

  async function updateProductcount({ id, count }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "PUT",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      setCartInfo(data);
    } catch (error) {
      console.log(error);
      // setCartInfo([]);
      if (error.response.data.message.includes("No Cart")) {
      }
    }
  }

  async function clearCart() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.message === "success") {
        setCartInfo([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <cartContext.Provider
      value={{
        getCartInfo,
        cartInfo,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
