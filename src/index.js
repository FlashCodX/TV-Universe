import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from "./Data/reducer";
import {DataProvider} from "./Data/DataProvider";
ReactDOM.render(
    <DataProvider initialState={initialState} reducer={reducer}>
       <App/>
    </DataProvider>,
    document.getElementById('root'))
