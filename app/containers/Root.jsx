import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default function Root() {
    return (
        <Provider store={store}>
            <AsyncApp />
        </Provider>
    );
}
