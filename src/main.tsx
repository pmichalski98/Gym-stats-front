import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import AuthProvider from "./contexts/AuthContext";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    </React.StrictMode>
)