import { useEffect, useState } from "react";
import TabAuthorization from "./tabs/tab-authorization";
import TabHeader from "./tabs/tab-header";
import TabParam from "./tabs/tab-param";
import TabRequestBody from "./tabs/tab-request-body";

const Payload = () => {
  const [activeTab, setActiveTab] = useState([""]);

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
              <TabParam />
            </div>
            {/* <!-- Headers --> */}
            <div class="tab-pane fade" id="nav-headers" role="tabpanel" aria-labelledby="nav-headers-tab">
              <TabHeader />
            </div>
            {/* <!-- Authorizations --> */}
            <div class="tab-pane fade" id="nav-authorizations" role="tabpanel" aria-labelledby="nav-authorizations-tab">
              <TabAuthorization />
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
