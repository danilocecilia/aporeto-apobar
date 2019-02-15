import React from "react";
import { getBeers } from "../../reducers/brewery";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBeers
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    getBeers: state.brewery.beersList
  };
};

class BarList extends React.Component {
  handleLoadBeers = () => {
    debugger;
    const { loadBeers } = this.props;
    //const a = loadBeers();
  };

  render() {
    return (
      <div>
        <GridList cellHeight={160} cols={3}>
          <div>teste</div>
          {/* {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))} */}
          {this.handleLoadBeers()}
        </GridList>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarList);
