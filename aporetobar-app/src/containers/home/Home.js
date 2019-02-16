import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { getBeers } from "../../reducers/brewery";

import { connect } from "react-redux";

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBeers }, dispatch);

// const mapDispatchToProps = dispatch => ({
//   getBeers: dispatch(getBeers())
// });

const mapStateToProps = state => {
  return {
    beers: state.brewery
  };
};
class Home extends Component {
  componentDidMount() {
    debugger;
    this.props.getBeers();
  }

  render() {
    return <div>uAHUAH</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
