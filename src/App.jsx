import React, { useState } from "react";

import config from "../src/config.json";
import Header from "./components/header";
import Url from "./components/url";
import Payload from "./components/payload";
import About from "./components/about";
import Footer from "./components/footer";

const App = () => {
  //url.jsx
  const [requestMethod, setRequestMethod] = useState(config.requestMethods.get);
  const [requestUrl, setRequestUrl] = useState("http://jsonplaceholder.typicode.com/posts");
  //url.jsx

  //url.jsx
  const handleChangeRequestMethod = (e) => {
    setRequestMethod(e.currentTarget.value);
  };
  const handleChangeRequestUrl = (e) => {
    setRequestUrl(e.currentTarget.value);
  };

  //url.jsx

  return (
    <React.Fragment>
      <Header />
      <Url
        requestMethod={requestMethod}
        requestUrl={requestUrl}
        handleChangeRequestMethod={handleChangeRequestMethod}
        handleChangeRequestUrl={handleChangeRequestUrl}
      />
      <Payload />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default App;
