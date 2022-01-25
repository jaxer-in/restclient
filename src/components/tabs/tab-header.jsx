import React, { useState } from "react";
import Note from "../common/note";
import KeyValueRow from "./key-value-row";

const TabHeader = ({ headers, handleAddHeader, handleRemoveHeader, handleKeyChange, handleValueChange }) => {
  return (
    <React.Fragment>
      <div className="pt-3" id="idDivHeaders"></div>
      {headers && headers.length > 0 ? (
        headers.map((h) => (
          <KeyValueRow
            keyValuePair={h}
            handleRemoveParam={handleRemoveHeader}
            handleKeyChange={handleKeyChange}
            handleValueChange={handleValueChange}
          />
        ))
      ) : (
        <Note>
          Currently there is no header! <br />
          Please add some headers to this request
        </Note>
      )}
      <div className="row justify-content-end pt-3 border-top mt-2">
        <div className="col-sm-2 col-12">
          <button className="btn btn-outline-primary w-100" onClick={(e) => handleAddHeader(e)}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabHeader;
