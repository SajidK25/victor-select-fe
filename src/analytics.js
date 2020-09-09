import ReactGA from "react-ga";
import { GA_ANALYTICS } from "./config";

export const initializeReactGA = () => {
  ReactGA.initialize(GA_ANALYTICS);
  ReactGA.pageview("/app.visit");
};

export const logReactGAEvent = ({ category, action }) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
