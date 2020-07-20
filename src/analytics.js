import ReactGA from "react-ga";

export const initializeReactGA = () => {
  ReactGA.initialize(process.env.REACT_GA_ANALYTICS);
  ReactGA.pageview("/app.visit");
};

export const logReactGAEvent = ({ category, action }) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
