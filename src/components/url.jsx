import FloatingInput from "../components/common/floating-input";

const Url = () => {
  return (
    <div className="container">
      <div className="row g-3 mt-2 pt-2">
        <div className="col-lg-2 col-md-3 col-sm-12">
          <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option value="get">GET</option>
              <option value="post">POST</option>
              <option value="head">HEAD</option>
              <option value="delete">DELETE</option>
            </select>
            <label for="floatingSelect">Request method</label>
          </div>
        </div>

        <div className="col-lg-8 col-md-6 col-sm-12">
          <FloatingInput
            placeholder="Request url or server endpoint"
            value="http://jsonplaceholder.typicode.com/posts"
          />
        </div>

        <div className="col-lg-2 col-md-3 col-sm-12 d-flex">
          <button className="btn btn-primary w-100">
            <i className="bi bi-send"></i>
            &nbsp;Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Url;
