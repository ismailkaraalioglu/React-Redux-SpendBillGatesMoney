import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <a href="https://github.com/ismailkaraalioglu" target="_blank">
            Spend Bill Gates' Money
          </a>
        </div>
      </div>
      <div className="container billgates">
        <img
          src={require("../images/billgates.jpg")}
          alt="billgates"
          className="rounded-img"
          width="125px"
          height="125px"
        />
        <h2>Bill Gates</h2>
      </div>
    </>
  );
}

export default Header;
