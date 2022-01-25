import React, { useState } from "react";
import Note from "../common/note";
import KeyValueRow from "./key-value-row";

const TabParam = ({ params, handleRemoveParam, handleAddParam, handleKeyChange, handleValueChange }) => {
  return (
    <div>
      <div id="idDivParams" className="pt-3"></div>
      {params && params.length > 0 ? (
        params.map((param) => (
          <KeyValueRow
            keyValuePair={param}
            handleRemoveParam={handleRemoveParam}
            handleKeyChange={handleKeyChange}
            handleValueChange={handleValueChange}
          />
        ))
      ) : (
        <Note>
          Currently there is no query parameter! <br />
          Please add some query parameters to this request
        </Note>
      )}

      <div className="row justify-content-end pt-3 border-top mt-2">
        <div className="col-sm-2 col-12">
          <button className="btn btn-outline-primary w-100" onClick={(e) => handleAddParam(e)}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabParam;
