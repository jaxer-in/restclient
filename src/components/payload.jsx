const Payload = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5 className="m-0">Payloads</h5>
        </div>
        <div className="card-body pb-0">
          {/* Nav tabs */}
          <div className="row my-2">
            <div className="col-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="params-tab"
                    data-toggle="tab"
                    href="#params"
                    role="tab"
                    aria-controls="params"
                    aria-selected="true"
                  >
                    Params
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="headers-tab"
                    data-toggle="tab"
                    href="#headers"
                    role="tab"
                    aria-controls="headers"
                    aria-selected="false"
                  >
                    Headers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="authorizations-tab"
                    data-toggle="tab"
                    href="#authorizations"
                    role="tab"
                    aria-controls="authorizations"
                    aria-selected="false"
                  >
                    Authorizations
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="request-body-tab"
                    data-toggle="tab"
                    href="#request-body"
                    role="tab"
                    aria-controls="request-body"
                    aria-selected="false"
                  >
                    Request body
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-2 p-1">
            <div className="col-12">
              <div className="tab-content">
                {/* <!-- Params --> */}
                <div className="tab-pane" id="params" role="tabpanel" aria-labelledby="params-tab">
                  <div id="idDivParams" className="my-2"></div>
                  <div className="row my-2">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <button className="btn btn-dark" onclick="addParam()">
                        Add params
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Headers --> */}
                <div className="tab-pane" id="headers" role="tabpanel" aria-labelledby="headers-tab">
                  <div className="my-2" id="idDivHeaders"></div>
                  <div className="row my-2">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <button className="btn btn-dark" onclick="addHeader()">
                        Add headers
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Authorizations --> */}
                <div className="tab-pane" id="authorizations" role="tabpanel" aria-labelledby="authorizations-tab">
                  <div className="col-12 my-2" id="idDivAuthorizations"></div>
                  <div className="row my-2">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <button className="btn btn-dark" onclick="addAuthorizations()">
                        Add authorizations
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Request body --> */}
                <div className="tab-pane active" id="request-body" role="tabpanel" aria-labelledby="request-body-tab">
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
                {/* <!-- END OF Request body --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END OF REQUEST CARD --> */}
    </div>
  );
};

export default Payload;
