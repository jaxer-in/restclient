const Url = () => {
  return (
    <div className="container">
      <div className="row mt-2 pt-2">
        <div className="col-lg-2 col-md-2 col-sm-12 mb-2">
          Method:
          <br />
          <select id="idSelectMethod" className="form-control">
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="head">HEAD</option>
            <option value="delete">DELETE</option>
          </select>
        </div>

        <div className="col-lg-8 col-md-7 col-sm-12 mb-2">
          URL:
          <br />
          {/* http://dummy.restapiexample.com/api/v1/employee/290 */}
          {/* http://localhost:8080/RestClientTesting/demoApi */}
          {/* http://jsonplaceholder.typicode.com/posts */}
          <input
            id="idInputUrl"
            className="form-control"
            placeholder="http://www.somehost.com/end-point"
            value="http://jsonplaceholder.typicode.com/posts"
          />
        </div>

        <div className="col-lg-2 col-md-3 col-sm-12">
          Action:
          <br />
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
