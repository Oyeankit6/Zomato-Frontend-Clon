/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../components/Context/StoreContext";

const Placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="tittle">Delivery information</p>
          <div className="muli-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Enter your mail" />
          <input type="text" placeholder="street" />
          <div className="muli-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="muli-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>Rs.{getTotalCartAmount() === 0 ? 0 : 15}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  Rs.
                  {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 15}
                </b>
              </div>
            </div>
            <button>PROCEED TO Payment</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Placeorder;
