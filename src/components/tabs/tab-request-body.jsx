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
              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelect">
                  <option value="json">text / json</option>
                  <option value="html">text / html</option>
                  <option value="xml">text / xml</option>
                </select>
                <label htmlFor="floatingSelect">Content type</label>
              </div>
            </div>

            <div className="col-lg-12 col-md-4 col-sm-4 col-6 mb-1">
              <button className="btn btn-light w-100">Beautify</button>
            </div>
            <div className="col-lg-12 col-md-4 col-sm-4 col-6 mb-1">
              <button className="btn btn-light w-100">Minify</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabRequestBody;
