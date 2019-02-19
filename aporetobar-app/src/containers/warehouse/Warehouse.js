import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBeers, deleteBeer, updateBeer } from "../../reducers/brewery";
import { getWines, deleteWine, updateWine } from "../../reducers/winery";

import Product from "./product/Product";

import { STORE_TYPE } from "../../constants/constants";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeers,
      deleteBeer,
      getWines,
      deleteWine,
      updateWine,
      updateBeer
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    beers: state.brewery,
    wines: state.winery
  };
};

class Warehouse extends Component {
  state = {
    storeType: STORE_TYPE.BEER,
    selected: [],
    productID: "",
    productName: ""
  };

  componentDidMount() {
    this.props.getBeers();
  }

  render() {
    const { storeType, selected, productName } = this.state;
    const {
      wines: { wines },
      beers: { beers },
      updateWine,
      updateBeer
    } = this.props;

    const handleOnClick = type => {
      if (type === STORE_TYPE.WINE) {
        this.props.getWines();
      }

      this.setState({
        storeType: type,
        selected: [],
        productID: "",
        productName: ""
      });
    };

    const handleDeleteProduct = selected => {
      selected.map(id => {
        storeType === STORE_TYPE.WINE
          ? this.props.deleteWine(id)
          : this.props.deleteBeer(id);
      });

      this.setState({ selected: [] });
    };

    const handleSelectedProduc = id => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      this.setState({ selected: newSelected });
    };

    const updateProduct = () => {
      const productItem = {
        ID: this.state.productID,
        name: this.state.productName
      };

      storeType === STORE_TYPE.WINE
        ? updateWine(productItem)
        : updateBeer(productItem);

      this.setState({ productName: "", productID: "" });
    };

    const setCurrentProductName = name => {
      this.setState({ productName: name });
    };

    const setCurrentProductID = id => {
      this.setState({ productID: id });
    };

    const renderBeerOrWine = () => {
      return (
        <Product
          title={storeType === STORE_TYPE.BEER ? "Beer" : "Wine"}
          productList={
            storeType === STORE_TYPE.BEER
              ? beers !== undefined
                ? beers
                : []
              : wines !== undefined
              ? wines
              : []
          }
          selected={selected}
          setDeleteProduct={selected => handleDeleteProduct(selected)}
          setSelectedProduct={id => handleSelectedProduc(id)}
          updateProduct={() => updateProduct()}
          setCurrentProductName={name => setCurrentProductName(name)}
          setCurrentProductID={id => setCurrentProductID(id)}
          productName={productName}
        />
      );
    };

    const isActive = match => (storeType === match ? "is-active" : "");

    return (
      <>
        <div className="tabs is-centered">
          <ul>
            <li className={isActive(STORE_TYPE.BEER)}>
              <a
                href="#"
                name="beers"
                onClick={() => handleOnClick(STORE_TYPE.BEER)}
              >
                BEERS
              </a>
            </li>
            <li className={isActive(STORE_TYPE.WINE)}>
              <a
                href="#"
                name="wines"
                onClick={() => handleOnClick(STORE_TYPE.WINE)}
              >
                WINES
              </a>
            </li>
          </ul>
        </div>
        <div className="container">{renderBeerOrWine(storeType)}</div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Warehouse);
