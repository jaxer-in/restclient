const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3 mb-3 shadow">
      <div className="container">
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
