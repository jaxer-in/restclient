const TabParamRow = ({ param, handleRemoveParam, handleKeyChange, handleValueChange }) => {
  const id = `id-param-row-${param.id}`;
  const keyName = `param-key-${param.id}`;
  const valueName = `param-value-${param.id}`;

  return (
    <div class="row mb-3" id={id}>
      <div class="col-sm-5 col-12 mb-1">
        <input
          class="form-control"
          placeholder="Param key"
          name={keyName}
          value={param.key}
          onChange={(e) => handleKeyChange(e, param.id)}
        />
      </div>
      <div class="col-sm-5 col-12 mb-1">
        <input
          class="form-control"
          placeholder="Param value"
          name={valueName}
          value={param.value}
          onChange={(e) => handleValueChange(e, param.id)}
        />
      </div>
      <div class="col-sm-2 col-12 text-center" title="Remove">
        <button class="btn btn-outline-secondary w-100" onClick={(e) => handleRemoveParam(param.id)}>
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TabParamRow;
