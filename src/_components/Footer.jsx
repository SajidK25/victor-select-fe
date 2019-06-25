import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import classNames from "classnames"

const styles = theme => ({
  root: {
    backgroundColor: "#3e3f42",
    borderTop: `solid 3px ${theme.palette.secondary[400]}`,
    paddingTop: "16px",
    overflowX: "hidden",
    flex: "shrink 0"
  },
  footerSections: {
    margin: "0 16px"
  },
  subFooter: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    padding: "8px 16px 8px 16px",
    marginTop: "8px",
    textAlign: "center"
  },
  footerText: {
    color: "#fff",
    fontSize: "13px",
    lineHeight: 1.5
  },
  block: {
    color: "#fff",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  white: {
    color: "#ffffff"
  }
})

class Footer extends Component {
  render () {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Typography
              className={classNames(classes.footerText, classes.footerSections)}
            >
              <li>
                <a href="https://www.victorymed.com/your-privacy" rel="nofollow" className={classes.block} >Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.victorymed.com/our-terms" rel="nofollow" className={classes.block} >Terms &amp; Conditions</a>
              </li>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={classNames(classes.footerText, classes.footerSections)}
            >
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={classNames(classes.footerText, classes.footerSections)}
            >
              
            </Typography>
          </Grid>
          <Grid className={classes.subFooter} item xs={12}>
            <Typography
              className={classes.white}
              variant="subtitle1"
              component={"span"}
            >
              © {currentYear} Victory Select
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
