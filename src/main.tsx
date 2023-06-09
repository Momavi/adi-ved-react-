import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { YMaps } from "@pbe/react-yandex-maps";

Sentry.init({
  dsn: "https://f5baa617b62244f48f1c378db460e495@o4504853053898752.ingest.sentry.io/4504853055012864",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <YMaps>
          <App />
        </YMaps>
      </Router>
    </Provider>
  </React.StrictMode>
);
