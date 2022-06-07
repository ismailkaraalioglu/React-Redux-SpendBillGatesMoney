import { useState, useEffect } from "react";
import CountUp from "react-countup";

//REDUX
import { useSelector } from "react-redux";

function Money() {
  const [prevMoney, setPrevMoney] = useState(0);

  // SELECTORS
  const items = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const billMoney = useSelector((state) => state.products.money);

  useEffect(() => {
    if (status === "idle") {
      setTimeout(() => {
        setPrevMoney(billMoney);
      }, 2000);
    }
  }, [items]);

  return (
    <div className="container money">
      <CountUp
        start={prevMoney}
        end={billMoney}
        preserveValue={true}
        separator=","
        decimals={0}
        decimal=","
        prefix="$"
      />
    </div>
  );
}

export default Money;
