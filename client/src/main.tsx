import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

// let publishable_key =
//     import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ??
//     "pk_test_Y2hvaWNlLXRlcnJhcGluLTU3LmNsZXJrLmFjY291bnRzLmRldiQ";
// if (!publishable_key) {
    
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </React.StrictMode>
);
