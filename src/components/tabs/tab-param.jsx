import React, { useState } from "react";
import TabParamRow from "./tab-param-row";

const TabParam = () => {
  const [params, setParams] = useState([]);

  const handleAddParam = (e) => {
    const clonedParams = [...params];
    let milis = new Date().getTime();

    let newParam = { id: milis, key: "key", value: "value" };
    console.log(newParam);

    clonedParams.push(newParam);
    setParams(clonedParams);
  };

  const handleRemoveParam = (paramId) => {
    if (window.confirm("Are you sure to remove?")) {
      const filteredParams = params.filter((param) => {
        return paramId !== param.id;
      });
      setParams(filteredParams);
    }
  };

  const handleKeyChange = (e, paramId) => {
    const clonedParams = [...params];
    clonedParams.map((clonedParam) => {
      if (paramId === clonedParam.id) {
        clonedParam.key = e.currentTarget.value;
      }
    });
    setParams(clonedParams);
  };

  const handleValueChange = (e, paramId) => {
    const clonedParams = [...params];
    clonedParams.map((clonedParam) => {
      if (paramId === clonedParam.id) {
        clonedParam.value = e.currentTarget.value;
      }
    });
    setParams(clonedParams);
  };

  return (
    <div className="">
      <div id="idDivParams" className="pt-3"></div>
      {params.map((param) => (
        <TabParamRow
          param={param}
          handleRemoveParam={handleRemoveParam}
          handleKeyChange={handleKeyChange}
          handleValueChange={handleValueChange}
        />
      ))}
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
