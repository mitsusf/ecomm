import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/June/PN/Hero/f3VX_2348_PrimeSavings_WFM_eventhero_desktop_1460x300.jpg"
        />

        <div className="checkout__subcontainer">
          {basket?.length === 0 ? (
            <div>
              <h2>You shopping basket is empty</h2>
            </div>
          ) : (
            <div className="checkout__title">
              <h2>You shopping basket </h2>
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout

