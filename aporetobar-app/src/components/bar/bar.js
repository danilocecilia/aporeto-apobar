import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

class Bar extends React.Component {
  styles = theme => ({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: `${theme.spacing.unit * 3}px`
    },
    paper: {
      padding: theme.spacing.unit,
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing.unit
    },
    divider: {
      margin: `${theme.spacing.unit * 2}px 0`
    }
  });

  render() {
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Material-UI Grid:
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3} />
        </Grid>
        <Divider />
        <Typography variant="subtitle1" gutterBottom>
          CSS Grid Layout:
        </Typography>
        <div>
          <div style={{ gridColumnEnd: "span 3" }}>
            <Paper>xs=3</Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
