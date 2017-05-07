import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Main from '../Main';

const store = configureStore();

export default function Root() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
