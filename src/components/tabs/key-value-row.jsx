const KeyValueRow = ({ keyValuePair, handleRemoveParam, handleKeyChange, handleValueChange }) => {
  const id = `id-key-value-pair-row-${param.id}`;
  const keyName = `key-value-pair-key-${param.id}`;
  const valueName = `key-value-pair-value-${param.id}`;

  return (
    <div class="row mb-3" id={id}>
      <div class="col-sm-5 col-12 mb-1">
        <input
          class="form-control"
          placeholder="Key"
          name={keyName}
          value={keyValuePair.key}
          onChange={(e) => handleKeyChange(e, keyValuePair)}
        />
      </div>
      <div class="col-sm-5 col-12 mb-1">
        <input
          class="form-control"
          placeholder="Value"
          name={valueName}
          value={keyValuePair.value}
          onChange={(e) => handleValueChange(e, keyValuePair)}
        />
      </div>
      <div class="col-sm-2 col-12 text-center" title="Remove">
        <button class="btn btn-outline-secondary w-100" onClick={(e) => handleRemoveParam(keyValuePair)}>
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default KeyValueRow;
