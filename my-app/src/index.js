import React from "react";
import ReactDOM from "react-dom";
// Added to use Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
// Import your Pages
import Home from "./Pages/Home";
import CreateTask from "./Pages/CreateTask";

import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="login" element={<Login />}> */}
            <Route index element={<Home />} />
            <Route path="create-task" element={<CreateTask />} />
            {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="contact" element={<Contact />}> */}
            {/* <Route index element={<ContactForm />} /> */}
            {/* <Route path="submitted" element={<ContactSubmitted />} /> */}
            {/* </Route> */}
          </Route>
          {/* </Route> */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <div className="App">
                  <h1>404</h1>
                  <h3>Page Not Found</h3>
                  <img style={{ width: "500px" }} />
                </div>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
