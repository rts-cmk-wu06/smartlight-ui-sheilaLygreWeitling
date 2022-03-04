import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './index.css'
import "./css/App.css"
import App from './App';
import ErrorBoundary from './asstes/Compontens/ErrorBoundary';

Sentry.init({
  dsn: "https://c7e715b265074c4ea8909bf6e30f312d@o1140325.ingest.sentry.io/6197852",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

