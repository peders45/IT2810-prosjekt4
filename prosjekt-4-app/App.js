import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import MainView from './src/components/organisms/MainView';
import { ApolloProvider } from 'react-apollo';
import client from './setupApolloClient';

//Root file of application, wrapped in 'Provider' for React-Redux connection, 
//and 'AppolloProvider' for database connection.
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainView/>
      </Provider>
    </ApolloProvider>
  );
}
