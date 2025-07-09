import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
import SEO from '../components/SEO'

function ScrollToTop(props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(location.pathname + location.search); // Track page views on route change
  }, [location]);

  return props.children;
}

const ScrollToTopWithRouter = withRouter(ScrollToTop);

export default function App() {
  useEffect(() => {
    ReactGA.initialize('G-E3RLFCYBT4');
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <SEO />
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTopWithRouter>
        <Headermain />
        <AppRoutes />
      </ScrollToTopWithRouter>
    </Router>
  );
}
