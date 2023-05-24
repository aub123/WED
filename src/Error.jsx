import React from "react";
import "./assets/css/main.css"
import "./assets/css/plugins.css"
const Error = () => (
  <>
    {/* META */}
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    {/* PAGE TITLE */}
    <title>Defcon - 404 Page</title>
    <div className="hero">
      {/* FRONT CONTENT */}
      <div className="front-content">
        {/* CONTAINER MID */}
        <div className="container-mid">
          <h1>
            404
            <br />
            That’s an error
          </h1>
          <p className="subline">
            The requested URL was not found on this server.That’s all we know.
          </p>
          <a href="/list">Back Home</a>
        </div>
        {/* /CONTAINER MID */}

      </div>
      {/* /FRONT CONTENT */}
      {/* BACKGROUND CONTENT */}
      <div className="background-content">
        <div className="background-overlay" />
        <div className="background-img" />
      </div>
      {/* /BACKGROUND CONTENT */}
    </div>


  </>
);

export default Error;
