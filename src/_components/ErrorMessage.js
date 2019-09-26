import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  errorStyles: {
    alignText: "center",
    color: "red"
  }
});

// const ErrorStyles = styled.div`
//   padding: 2rem;
//   background: white;
//   margin: 2rem 0;
//   border: 1px solid rgba(0, 0, 0, 0.05);
//   border-left: 5px solid red;
//   p {
//     margin: 0;
//     font-weight: 100;
//   }
//   strong {
//     margin-right: 1rem;
//   }
// `;

export const ErrorMessage = ({ error }) => {
  const classes = useStyles();

  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <Typography align="center" color="error" key={i}>
        {error.message.replace("GraphQL error: ", "")}
      </Typography>
    ));
  }
  return (
    <Typography align="center" color="error">
      {error.message.replace("GraphQL error: ", "")}
    </Typography>
  );
};

ErrorMessage.defaultProps = {
  error: {}
};

ErrorMessage.propTypes = {
  error: PropTypes.object
};
