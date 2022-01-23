const Header = () => {
  return (
    <header className="py-2 mb-3 shadow">
      {/* <!-- Image and text --> */}
      <nav class="container navbar navbar-light bg-white">
        <a class="navbar-brand" href="#">
          <h2 className="logo text-center m-0">
            <i className="bi bi-terminal"></i>
            {/* <IconSend w="48" h="48" /> */}
            &nbsp; rest client
          </h2>
        </a>
        <h3 className="">
          <a href="https://github.com/jaxer-in/restclient" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </h3>
      </nav>
      <div className="container d-none">
        <div className="row"></div>
        <h1 className="logo text-center  m-0">
          <i className="bi bi-terminal"></i>
          {/* <IconSend w="48" h="48" /> */}
          &nbsp; rest client
        </h1>

        <ul className="nav nav-pills d-none">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
