import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import ThemeCustomization from "./themes";
// import ScrollTop from "./components/ScrollTop";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <ThemeCustomization>
          {/* <ScrollTop> */}
            <RouterProvider router={router} />
          {/* </ScrollTop> */}
        </ThemeCustomization>
      </CssBaseline>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
