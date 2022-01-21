import { useEffect, useState } from "react";

const Payload = () => {
  const [activeTab, setActiveTab] = useState([""]);

  let tabClass = "tab-pane";

  useEffect(() => {}, []);

  const onTabChange = (e) => {
    console.log(e.target.id.split("-")[0]);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5 className="m-0 p-2">Request / Payloads</h5>
        </div>
        <div className="card-body pb-0">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link"
                id="nav-params-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-params"
                type="button"
                role="tab"
                aria-controls="nav-params"
                aria-selected="true"
              >
                Params
              </button>
              <button
                class="nav-link"
                id="nav-headers-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-headers"
                type="button"
                role="tab"
                aria-controls="nav-headers"
                aria-selected="false"
              >
                Headers
              </button>
              <button
                class="nav-link"
                id="nav-authorizations-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-authorizations"
                type="button"
                role="tab"
                aria-controls="nav-authorizations"
                aria-selected="false"
              >
                Authorizations
              </button>
              <button
                class="nav-link active"
                id="nav-request-body-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-request-body"
                type="button"
                role="tab"
                aria-controls="nav-request-body"
                aria-selected="false"
              >
                Request body
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            {/* <!-- Params --> */}
            <div class="tab-pane fade" id="nav-params" role="tabpanel" aria-labelledby="nav-params-tab">
              <div id="idDivParams" className="my-2"></div>
              <div className="row my-2">
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <button className="btn btn-outline-primary" onclick="addParam()">
                    Add params
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Headers --> */}
            <div class="tab-pane fade" id="nav-headers" role="tabpanel" aria-labelledby="nav-headers-tab">
              <div className={tabClass} id="headers" role="tabpanel" aria-labelledby="headers-tab">
                <div className="my-2" id="idDivHeaders"></div>
                <div className="row my-2">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <button className="btn btn-outline-primary" onclick="addHeader()">
                      Add headers
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Authorizations --> */}
            <div class="tab-pane fade" id="nav-authorizations" role="tabpanel" aria-labelledby="nav-authorizations-tab">
              <div className="col-12 my-2" id="idDivAuthorizations"></div>
              <div className="row my-2">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <button className="btn btn-outline-primary" onclick="addAuthorizations()">
                    Add authorizations
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Request body --> */}
            <div
              class="tab-pane fade show active"
              id="nav-request-body"
              role="tabpanel"
              aria-labelledby="nav-request-body-tab"
            >
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
            </div>
            {/* <!-- Request body --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payload;
