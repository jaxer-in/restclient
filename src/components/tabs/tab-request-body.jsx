import React from "react";

const TabRequestBody = () => {
  return (
    <React.Fragment>
      <div className="row my-2">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <textarea id="idTextRequestBody" className="form-control" rows="8"></textarea>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12">
          <div className="row my-2">
            <div className="col-lg-12 col-md-4 col-sm-4 mb-1">
              <select id="idSelectMethod" className="form-control">
                <option value="json">text / json</option>
                <option value="html">text / html</option>
                <option value="xml">text / xml</option>
              </select>
            </div>

            <div className="col-lg-12 col-md-4 col-sm-4 col-6 mb-1">
              <button className="btn btn-light w-100" onclick="beautifyRequestBody()">
                Beautify
              </button>
            </div>
            <div className="col-lg-12 col-md-4 col-sm-4 col-6 mb-1">
              <button className="btn btn-light w-100" onclick="minifyRequestBody();">
                Minify
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabRequestBody;
