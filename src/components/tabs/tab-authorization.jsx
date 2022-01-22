import React, { useState } from "react";
import config from "../../config.json";

const TabAuthorization = () => {
  const [authType, setAuthType] = useState(config.authTypes.NO_AUTH);
  const [authValue, setAuthValue] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeAuthType = (e) => {
    setAuthType(e.currentTarget.value);
  };

  return (
    <div>
      <div className="row justify-content-start mt-2 py-4">
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={(e) => handleChangeAuthType(e)}
            >
              <option value={config.authTypes.NO_AUTH}>No Auth</option>
              <option value={config.authTypes.BEARER_TOKEN}>Bearer Token</option>
              <option value={config.authTypes.BASIC_AUTH}>Basic Auth</option>
            </select>
            <label for="floatingSelect">Authorization type</label>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">{getAuthContent()}</div>
      </div>
    </div>
  );
  function getAuthContent() {
    if (authType === config.authTypes.NO_AUTH) {
      return (
        <div className=" p-3 bg-light rounded">
          <p className="text-center">
            This request does not use any authorization.
            <br />
            <a href="#" className="text-decoration-none">
              Learn more about authorization <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </p>
        </div>
      );
    }

    if (authType === config.authTypes.BEARER_TOKEN) {
      return (
        <div className=" p-3 bg-light rounded">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" placeholder="Auth bearer token" />
            <label for="floatingInput">Auth bearer token</label>
          </div>
        </div>
      );
    }
    if (authType === config.authTypes.BASIC_AUTH) {
      return (
        <div className=" p-3 bg-light rounded">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" placeholder="Username" />
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating">
            <input type={showPassword ? "text" : "password"} class="form-control" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-check mt-2">
            <label class="form-check-label cursor-pointer">
              <input
                class="form-check-input"
                type="checkbox"
                onChange={(e) => setShowPassword(e.currentTarget.checked)}
              />
              {showPassword ? <span className="text-danger">Hide password !</span> : <span>Show password</span>}
            </label>
          </div>
        </div>
      );
    }
    return null;
  }
};

export default TabAuthorization;
