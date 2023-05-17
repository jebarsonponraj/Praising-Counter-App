import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";


import "./index.css"
import App from "./App"



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    
);

serviceWorkerRegistration.register();