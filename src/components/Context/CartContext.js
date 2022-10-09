import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import dummyCatalog from "../../data/dummyCatalog.json";

const CartContext = createContext();

export const CartState = () => {
  return useContext(CartContext);
};

const CartContextProviderWrapper = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const countCartItems = () => {
    return cartItems.reduce((accum, item) => accum + item.qty, 0);
  };

  const getCartTotal = () => {
    return cartItems
      .reduce((accum, cartItem) => {
        const itemData = dummyCatalog.find((item) => item.id === cartItem.id);
        return itemData.isOnSale
          ? accum + itemData.salePrice * cartItem.qty
          : accum + itemData.price * cartItem.qty;
      }, 0)
      .toFixed(2);
  };

  const addToCart = (id, size) => {
    setCartItems((currItems) => {
      const item = cartItems.find(
        (item) => item.id === id && item.size === size
      );
      if (!item) {
        return [...currItems, { id: id, size: size, qty: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.size === size) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeProductFromCart = (id, size) => {
    setCartItems(
      cartItems.reduce((result, item) => {
        if (item.id !== id) {
          return result.concat(item);
        } else if (item.id === id && item.size !== size) {
          return result.concat(item);
        } else {
          return result;
        }
      }, [])
    );
  };

  useEffect(() => {
    const prev_items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(prev_items);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeProductFromCart,
        countCartItems,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProviderWrapper;
