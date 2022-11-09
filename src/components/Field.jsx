import React from "react";

export const Field = ({ icon, ...rest }) => (
  <div className="d-flex align-items-center mb-2 col-12 justify-content-between">
    <i className={icon + ' fa-lg col-auto'}></i>
    <input
      className="form-control col-10"
      {...rest}
    />
  </div>
);