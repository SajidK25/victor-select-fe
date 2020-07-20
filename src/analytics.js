import ReactGA from "react-ga";

export const initializeReactGA = () => {
  ReactGA.initialize("UA-162995465-1");
  ReactGA.pageview("/app.visit");
};

export const logReactGAEvent = ({ category, action }) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
