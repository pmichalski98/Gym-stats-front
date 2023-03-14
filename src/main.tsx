import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AuthProvider} from "react-auth-kit";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider authType={'cookie'} authName={"_auth"} cookieDomain={window.location.hostname}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    </React.StrictMode>
)