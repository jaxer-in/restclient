const FloatingInput = (props) => {
  const idRandom = `id-floating-input-${new Date().getTime()}`;
  return (
    <div class="form-floating mb-2">
      <input
        id={idRandom}
        type={props.type}
        value={props.value}
        class="form-control"
        placeholder={props.placeholder}
        onChange={(e) => props.handleOnChange(e)}
      />
      <label htmlFor={idRandom}>{props.placeholder}</label>
    </div>
  );
};

FloatingInput.defaultProps = {
  type: "text",
  value: "",
};

export default FloatingInput;
