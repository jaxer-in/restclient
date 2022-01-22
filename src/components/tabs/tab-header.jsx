import React from "react";

const TabHeader = () => {
  return (
    <React.Fragment>
      <div className="tab-pane" id="headers" role="tabpanel" aria-labelledby="headers-tab">
        <div className="my-2" id="idDivHeaders"></div>
        <div class="row mb-3">
          <div class="key col-sm-5 col-12 mb-1">
            <input
              class="form-control"
              placeholder="Header key"
              name="headerKey"
              id="idHeaderKey${time}"
              time-stamp="${time}"
            />
          </div>
          <div class="value col-sm-5 col-12 mb-1">
            <input class="form-control" placeholder="Header value" name="headerValue" id="idHeaderValue${time}" />
          </div>
          <div class="col-sm-2 col-12 text-center">
            <button class="btn btn-outline-secondary w-100">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
        <div className="row justify-content-end py-2 border-top mt-2">
          <div className="col-sm-2 col-12">
            <button className="btn btn-outline-primary w-100" onclick="addParam()">
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabHeader;
