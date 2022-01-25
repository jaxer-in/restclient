import { useEffect, useState } from "react";
import FloatingInput from "../components/common/floating-input";
import config from "../config.json";

const Url = ({ requestMethod, requestUrl, handleChangeRequestMethod, handleChangeRequestUrl }) => {
  let requestMethodLabelClass = "";
  if (requestMethod === config.requestMethods.get) {
    requestMethodLabelClass = "text-primary";
  } else if (requestMethod === config.requestMethods.post || requestMethod === config.requestMethods.put) {
    requestMethodLabelClass = "text-success";
  } else if (requestMethod === config.requestMethods.head) {
    requestMethodLabelClass = "text-secondary";
  } else if (requestMethod === config.requestMethods.delete) {
    requestMethodLabelClass = "text-danger is-invalid";
    requestMethodLabelClass = "text-danger";
  }

  return (
    <div className="container">
      <div className="row g-3 mt-2 pt-2">
        <div className="col-lg-2 col-md-3 col-sm-12">
          <div className="form-floating">
            <select
              className={`form-select ${requestMethodLabelClass}`}
              id="idselectRequestMethod"
              onChange={(e) => handleChangeRequestMethod(e)}
            >
              <option value={config.requestMethods.get}>GET</option>
              <option value={config.requestMethods.post}>POST</option>
              <option value={config.requestMethods.put}>PUT</option>
              <option value={config.requestMethods.head}>HEAD</option>
              <option value={config.requestMethods.delete}>DELETE</option>
            </select>
            <label htmlFor="idselectRequestMethod" className={requestMethodLabelClass} style={{ opacity: "0.9" }}>
              Request method
            </label>
          </div>
        </div>

        <div className="col-lg-8 col-md-6 col-sm-12">
          <FloatingInput
            placeholder="Request url or server endpoint"
            value={requestUrl}
            addBottomMargin={false}
            handleOnChange={handleChangeRequestUrl}
          />
        </div>

        <div className="col-lg-2 col-md-3 col-sm-12 d-flex">
          <button className="btn btn-primary w-100">
            <i className="bi bi-send"></i>
            &nbsp;Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Url;
