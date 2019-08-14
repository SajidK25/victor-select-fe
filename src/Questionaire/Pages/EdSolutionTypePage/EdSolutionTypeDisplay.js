import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    paddingLeft: 8,
    paddingRight: 8
  },
  titleLine: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 0,
    marginBottom: theme.spacing(0.5)
  },
  product: {
    fontSize: 13,
    fontWeight: 400,
    marginBottom: 8
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.primary.main
  },
  footnote: {
    fontWeight: 200,
    fontSize: 12,
    fontStyle: "italic"
  },
  list: {
    marginLeft: 16,
    padding: 0,
    marginTop: 4,
    marginBottom: 12
  },
  listItem: {
    marginLeft: 0
  }
}));

export const EdSolutionTypeDisplay = props => {
  const { options } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleLine}>
        <Typography className={classes.title}>{options.title}</Typography>
      </div>
      <ul className={classes.list}>
        {options.product.map(p => (
          <li className={classes.listItem} key={p.title}>
            <Typography className={classes.product}>
              <span className={classes.productTitle}>{p.title}</span>
              {p.description}
            </Typography>
          </li>
        ))}
      </ul>
      {options.footnote && (
        <Typography className={classes.footnote}>{options.footnote}</Typography>
      )}
    </div>
  );
};
