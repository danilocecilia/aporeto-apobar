import React, { Component } from "react";
import { getBeers } from "../../reducers/brewery";
import { getWines } from "../../reducers/winery";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Product from "./product/Product";
import { STORE_TYPE, MARKET_TYPE } from "../../constants/constants";

const mapStateToProps = state => {
  return {
    beers: state.brewery,
    wines: state.winery
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeers,
      getWines
    },
    dispatch
  );

class Market extends Component {
  state = {
    name: ""
  };

  componentDidMount() {
    this.props.getBeers();
    this.props.getWines();
  }

  render() {
    const {
      match: { params },
      beers: { beers },
      wines: { wines }
    } = this.props;

    const { name } = this.state;

    const handleNewRandonDrink = () => {
      if (params.type === MARKET_TYPE.BREWERY) {
        this.setState({ name: getRandomItem(beers).name });
      } else {
        this.setState({ name: getRandomItem(wines).name });
      }
    };

    const getRandomItem = items => {
      return items[Math.floor(Math.random() * items.length)];
    };

    return (
      <Product
        market={params.type}
        storeType={
          params.type === MARKET_TYPE.BREWERY
            ? STORE_TYPE.BEER
            : STORE_TYPE.WINE
        }
        getDrink={() => handleNewRandonDrink()}
        name={name}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
