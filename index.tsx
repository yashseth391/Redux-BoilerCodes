import { registerRootComponent } from "expo";

import App from "./App";
import App2 from "./App2";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,

// the environment is set up appropriately

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App2 />
    </PersistGate>
  </Provider>
);
registerRootComponent(Root);
