import React from "react";
import millify from "millify";
import Dinero from "dinero.js";

// REDUX
import { useSelector } from "react-redux";

function Receipt() {
  const products = useSelector((state) => state.products.items);
  const total = useSelector((state) => state.products.total);

  return (
    <>
      {total > 0 ? (
        <div className="container receipt-content">
          <div className="receipt-title">Your Receipt</div>
          {products &&
            products.map((item) =>
              item.amount > 0 ? (
                <div key={item.id} className="receipt-item">
                  <div className="receipt-item-name">{item.name}</div>
                  <div className="receipt-item-amount">
                    x{millify(item.amount)}
                  </div>
                  <div className="receipt-item-price">
                    ${millify(item.price * item.amount)}
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          {total > 0 ? (
            <div className="receipt-total">
              <span>TOTAL</span>{" "}
              <div className="total-money">
                {Dinero({ amount: parseInt(total * 100) }).toFormat("$0,0")}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Receipt;
