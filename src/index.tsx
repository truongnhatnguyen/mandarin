import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { loadEnv } from "./environment";
import "./fonts";
import ScrollToTop from "./helpers/ScrollToTop";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
loadEnv().then(() => {
  root.render(
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
