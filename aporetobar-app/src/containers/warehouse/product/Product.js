import React from "react";
import "./Product.css";

const Product = props => {
  const {
    title,
    productList,
    setDeleteProduct,
    selected,
    setSelectedProduct,
    productName,
    updateProduct,
    setCurrentProductName,
    setCurrentProductID
  } = props;

  const renderEdit = () => (
    <div class="field">
      <label class="label">Name</label>
      <div className="columns">
        <div className="column is-11">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={e => setCurrentProductName(e.target.value)}
            />
          </div>
        </div>
        <div className="column">
          <div class="control">
            <button
              className="button is-button is-link"
              onClick={() => updateProduct()}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDeleteItems = () => (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr style={{ background: "#dbdbdb38" }}>
          <td className="is-11">
            <b>{selected.length} Selected</b>
          </td>
          <td style={{ width: "373px", textAlign: "right" }}>
            <button
              className="button is-danger"
              onClick={() => setDeleteProduct(selected)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );

  const isSelected = id => selected.indexOf(id) !== -1;

  return (
    <>
      {renderEdit()}
      <div className="columns">
        <div className="column is-full">
          {selected.length > 0 ? renderDeleteItems() : null}
          <table className="table is-striped" style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th />
                <th>{title}</th>
                <th className="center">Delete</th>
              </tr>
              {productList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="center">
                      <button
                        className="button is-success"
                        onClick={() => {
                          setCurrentProductID(item.ID);
                          setCurrentProductName(item.name);
                        }}
                      >
                        <i class="fa fa-edit" />
                      </button>
                    </td>
                    <td>{item.name}</td>
                    <td className="remove center">
                      <input
                        type="checkbox"
                        checked={isSelected(item.ID)}
                        onClick={event => setSelectedProduct(item.ID)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Product;
