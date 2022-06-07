import React from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { buyProperty, sellProperty } from "../redux/products/productsSlice";

// DINERO
import Dinero from "dinero.js";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const money = useSelector((state) => state.products.money);

  const findItem = (item) => {
    let addedItem = products.find((product) => product.id === item.id);
    return addedItem ? addedItem.amount : 0;
  };

  const handleChange = ({ e, amoultOld, id, price }) => {
    let val = e.target.value === "" ? 0 : e.target.value;
    let result = parseInt(val) - parseInt(amoultOld);
    result > 0
      ? dispatch(buyProperty({ amount: result, id: id, price: price }))
      : dispatch(sellProperty({ amount: result * -1, id: id, price: price }));
  };

  const buyItems = (amount, price, id) => {
    dispatch(buyProperty({ amount: amount, price: price, id: id }));
  };

  const sellItems = (amount, price, id) => {
    dispatch(buyProperty({ amount: amount, price: price, id: id }));
  };

  return (
    <div className="container grid-container">
      {products &&
        products.map((item) => (
          <div key={item.id} className="card">
            <div className="card-img">
              <img
                src={require(`../images/${item.name
                  .toLowerCase()
                  .split(" ")
                  .join("-")}.jpg`)}
                alt={item.name}
              />
            </div>
            <div className="card-body">
              <h3>{item.name}</h3>
              <p>
                {Dinero({ amount: parseInt(item.price * 100) }).toFormat(
                  "$0,0"
                )}
              </p>
            </div>
            <div className="card-input-group">
              <button
                className="btn-sell"
                onClick={() => sellItems(-1, item.price, item.id)}
                disabled={!findItem(item)}
              >
                SELL
              </button>

              <input
                type="number"
                value={findItem(item)}
                min="0"
                disabled
                onChange={(e) =>
                  e.target.value > 0 &&
                  handleChange({
                    e,
                    amoultOld: findItem(item),
                    id: item.id,
                    price: item.price,
                  })
                }
              />

              <button
                disabled={money < 0}
                className="btn-buy"
                onClick={() => buyItems(1, item.price, item.id)}
              >
                BUY
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products;
