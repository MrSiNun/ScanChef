import React from 'eact';
import { Provider } from 'eact-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import AppRegistry.registerComponent;
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;