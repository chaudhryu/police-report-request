import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import App from "./App";
import store from "./store";
import { msalConfig } from "./config/authConfig";   // one “./”, not “../src/”

const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")).render(
  <MsalProvider instance={msalInstance}>
    <Provider store={store}>
      <App />
    </Provider>
  </MsalProvider>
);
