const FloatingInput = (props) => {
  const idRandom = `id-floating-input-${new Date().getTime()}`;

  const cssClass = props.addBottomMargin ? "form-floating mb-2" : "form-floating";

  return (
    <div class={cssClass}>
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
  addBottomMargin: true,
};

export default FloatingInput;
