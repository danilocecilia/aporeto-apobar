import React from "react";

const Product = props => {
  const { market, name, storeType, getDrink } = props;
  return (
    <div>
      <div className="columns">
        <div className="column is-12">
          <p className="title is-1">Welcome to the {market}</p>
          <p className="subtitle is-3">
            Click the button to get some {storeType}
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12">
          <button className="button" onClick={() => getDrink()}>
            I want {storeType}
          </button>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12">
          {name ? (
            <span className="tag is-danger is-large">
              <div id="glass">
                <p>{name}</p>
              </div>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
