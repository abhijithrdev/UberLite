import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import RootNavigator from "./navigation";
import NotificationsHandler from "./utils/NotificationsHandler";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NotificationsHandler />
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
