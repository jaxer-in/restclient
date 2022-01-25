import { useEffect, useState } from "react";
import config from "../config.json";
import TabAuthorization from "./tabs/tab-authorization";
import TabHeader from "./tabs/tab-header";
import TabParam from "./tabs/tab-param";
import TabRequestBody from "./tabs/tab-request-body";

const Payload = () => {
  const [params, setParams] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [authType, setAuthType] = useState(config.authTypes.NO_AUTH);

  useEffect(() => {}, []);

  const handleAddParam = (e) => {
    const clonedParams = [...params];
    let milis = new Date().getTime();

    let newParam = { id: milis, key: "key", value: "value" };
    console.log(newParam);

    clonedParams.push(newParam);
    setParams(clonedParams);
  };

  const handleRemoveParam = (e, param0) => {
    if (window.confirm("Are you sure to remove?")) {
      const filteredParams = params.filter((param) => {
        return param0.id !== param.id;
      });
      setParams(filteredParams);
    }
  };

  const handleParamKeyChange = (e, param0) => {
    const clonedParams = [...params];
    clonedParams.map((clonedParam) => {
      if (param0.id === clonedParam.id) {
        clonedParam.key = e.currentTarget.value;
      }
    });
    setParams(clonedParams);
  };

  const handleParamValueChange = (e, param0) => {
    const clonedParams = [...params];
    clonedParams.map((clonedParam) => {
      if (param0.id === clonedParam.id) {
        clonedParam.value = e.currentTarget.value;
      }
    });
    setParams(clonedParams);
  };

  const handleAddHeader = (e) => {
    const clonedHeaders = [...headers];
    let milis = new Date().getTime();

    let newHeader = { id: milis, key: "key", value: "value" };
    console.log(newHeader);

    clonedHeaders.push(newHeader);
    setHeaders(clonedHeaders);
  };

  const handleRemoveHeader = (e, header0) => {
    if (window.confirm("Are you sure to remove?")) {
      const filteredParams = headers.filter((h) => {
        return header0.id !== h.id;
      });
      setHeaders(filteredParams);
    }
  };

  const handleHeaderKeyChange = (e, header0) => {
    const clonedHeaders = [...headers];
    clonedHeaders.map((h) => {
      if (header0.id === h.id) {
        h.key = e.currentTarget.value;
      }
    });
    setHeaders(clonedHeaders);
  };

  const handleHeaderValueChange = (e, header0) => {
    const clonedHeaders = [...headers];
    clonedHeaders.map((h) => {
      if (header0.id === h.id) {
        h.value = e.currentTarget.value;
      }
    });
    setHeaders(clonedHeaders);
  };

  const handleChangeAuthType = (e) => {
    setAuthType(e.currentTarget.value);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5 className="m-0 p-2">Request / Payloads</h5>
        </div>
        <div className="card-body">
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
                Params{" "}
                <span class={params && params.length > 0 ? "badge bg-primary" : "badge bg-secondary"}>
                  {params.length}
                </span>
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
                Headers{" "}
                <span class={headers && headers.length > 0 ? "badge bg-primary" : "badge bg-secondary"}>
                  {headers.length}
                </span>
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
                Authorizations{" "}
                <span class={authType !== config.authTypes.NO_AUTH ? "badge bg-primary" : "badge bg-secondary"}>
                  {authType}
                </span>
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
              <TabParam
                params={params}
                handleAddParam={handleAddParam}
                handleRemoveParam={handleRemoveParam}
                handleKeyChange={handleParamKeyChange}
                handleValueChange={handleParamValueChange}
              />
            </div>
            {/* <!-- Headers --> */}
            <div class="tab-pane fade" id="nav-headers" role="tabpanel" aria-labelledby="nav-headers-tab">
              <TabHeader
                headers={headers}
                handleAddHeader={handleAddHeader}
                handleRemoveHeader={handleRemoveHeader}
                handleKeyChange={handleHeaderKeyChange}
                handleValueChange={handleHeaderValueChange}
              />
            </div>
            {/* <!-- Authorizations --> */}
            <div class="tab-pane fade" id="nav-authorizations" role="tabpanel" aria-labelledby="nav-authorizations-tab">
              <TabAuthorization authType={authType} handleChangeAuthType={handleChangeAuthType} />
            </div>
            <div
              class="tab-pane fade show active"
              id="nav-request-body"
              role="tabpanel"
              aria-labelledby="nav-request-body-tab"
            >
              <TabRequestBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payload;
