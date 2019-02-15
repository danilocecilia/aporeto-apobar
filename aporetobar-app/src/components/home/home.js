import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import BarList from "../bar/barList";

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const LinkTab = props => {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
};

class Home extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    //const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={this.handleChange}
            >
              <LinkTab label="Winery" href="page1" />
              <LinkTab label="Brewery" href="page2" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <BarList />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer style={{ top: "0" }}>Page Two</TabContainer>
          )}
        </div>
      </NoSsr>
    );
  }
}

export default connect()(Home);
