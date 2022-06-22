import axios from "axios";
import history from "../history";
import { clearCart } from "./cart";

const CREATE_ORDER = "CREATE_ORDER";
const GET_USER_ORDERS = "GET_USER_ORDERS";

export const createOrderAction = (order) => ({ type: CREATE_ORDER, order });
export const getUserOrderAction = (orders) => ({
  type: GET_USER_ORDERS,
  orders,
});

export const createOrder = (cart, userId) => {
  return async (dispatch) => {
    try {
      let total = 0.0;
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
      }
      const order = {
        purchaseDate: new Date(),
        total: total,
        userId: userId,
      };
      const { data } = await axios.post(`/api/orders`, order);
      for (let i = 0; i < cart.length; i++) {
        const bookOrder = {
          orderId: data.id,
          bookId: cart[i].id,
          quantity: cart[i].quantity,
        };
        await axios.post(`/api/bookOrders`, bookOrder);
      }
      if (userId > 0) {
        await axios.delete(`/api/cart/${userId}`);
      }

      history.push("/thankyou");
      dispatch(clearCart());
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
