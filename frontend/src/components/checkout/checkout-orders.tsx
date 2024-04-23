'use client'
import React, { useEffect, useState } from "react";
import useCartInfo from "@/hooks/use-cart-info";
import { getCartProducts } from "@/redux/features/cart";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IProduct } from "@/types/product-d-t";

// prop type 
type IProps = {
  cart_products:IProduct[]
}

const CheckoutOrders = ({cart_products}:IProps) => {
  const { total } = useCartInfo();
  const [shipCost,setShipCost] = useState<number | string>(7.00);

  return (
    <div className="your-order-table table-responsive">
      {cart_products.length > 0 && (
        <table>
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart_products.map((item,i) => (
            <tr key={i} className="cart_item">
              <td className="product-name">
                {item.title}{" "}
                <strong className="product-quantity"> × {item.orderQuantity}</strong>
              </td>
              <td className="product-total">
                <span className="amount">${(item.price * item.orderQuantity!).toFixed(2)}</span>
              </td>
            </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Cart Subtotal</th>
              <td>
                <span className="amount">${total.toFixed(2)}</span>
              </td>
            </tr>
            <tr className="shipping">
              <th>Shipping</th>
              <td>
                <ul>
                  <li>
                    <input type="radio" id="amount" name="shipping" onChange={()=> setShipCost(7.00)} checked={shipCost === 7.00}/>
                    <label htmlFor="amount">Flat Rate: <span className="amount">$7.00</span></label>
                  </li>

                  <li>
                    <input type="radio" id="free" name="shipping" onChange={()=> setShipCost('free')}/>
                    <label htmlFor="free">Free Shipping:</label>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="order-total">
              <th>Order Total</th>
              <td>
                <strong>
                  <span className="amount">
                    ${typeof shipCost === 'number' ? (total + shipCost).toFixed(2) : total.toFixed(2)}
                  </span>
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default CheckoutOrders;
