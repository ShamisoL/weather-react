import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Form.css";

export default function Form() {
  return (
    <div className="form">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-success w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
