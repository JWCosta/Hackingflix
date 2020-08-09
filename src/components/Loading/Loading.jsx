import React from "react";

import "./Loading.css";

const Loading = () => (
  <div className="loading" data-testid="loading">
    <div className="preloader">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    Carregando
  </div>
);

export default Loading;
