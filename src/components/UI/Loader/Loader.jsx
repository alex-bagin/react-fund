import React from "react";
import classen from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classen.loader}>
      <div className={classen.loader__element}></div>
      <div className={classen.loader__content}>Loading...</div>
    </div>
  );
};

export default Loader;
