import { registerRootComponent } from "expo";

import App from "./App";
import App2 from "./App2";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,

// the environment is set up appropriately

const Root = () => (
  <Provider store={store}>
    <App2 />
  </Provider>
);
registerRootComponent(Root);
