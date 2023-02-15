import React from 'react';
import {MainStack} from './src/navigation/mainStack';
import {store} from './src/management/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
